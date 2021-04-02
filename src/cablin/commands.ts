import { Expr, ExprConst, exprInputFactory, exprOutputFactory } from './exprs'
import { typeOfValue, Value } from './value'
import { YamlObj } from './yamlobj'

const commandTypeMap = new Map<string, string>()
commandTypeMap.set('CommandList', 'list')
commandTypeMap.set('CommandAssign', 'assign')
commandTypeMap.set('CommandIf', 'if')
commandTypeMap.set('CommandWhile', 'while')
commandTypeMap.set('CommandVar', 'var')
commandTypeMap.set('CommandCall', 'call')
commandTypeMap.set('CommandReturn', 'return')
commandTypeMap.set('CommandBreak', 'break')
commandTypeMap.set('CommandContinue', 'continue')

const commandConstructMap = new Map<string, {(): Command}>()

function getCommandType(cmd: Command): string {
  const name = commandTypeMap.get(cmd.cmdName())
  if (name === undefined) {
    return ''
  }
  return name
}

export function commandOutputFactory(cmd: Command): YamlObj {
  const name = getCommandType(cmd)
  const ret: {
    [key: string]: YamlObj;
  } = {}
  ret[name] = cmd.output()
  return ret
}

export function commandInputFactory(obj: any): Command {
  console.log(obj)
  console.log(commandConstructMap)
  for (const key in obj) {
    const value = obj[key]
    console.log(key, value)
    const func = commandConstructMap.get(key)
    if (func === undefined) {
      continue
    }
    const cmd = func()
    console.log(cmd)
    cmd.input(value)
    return cmd
  }

  // TODO: throw
  throw 'command type name error'
}

export class CommandCall {
  funcName = ''
  params: Expr[] = []

  cmdName (): string {
    return 'CommandCall'
  }

  input (obj: any) {
    this.funcName = obj['name']
    this.params = []
    obj['params'].forEach((paramObj: any) => {
      this.params.push(exprInputFactory(paramObj))
    });
  }

  output (): YamlObj {
    const outputParams: YamlObj[] = []
    this.params.forEach((param: Expr) => {
      outputParams.push(exprOutputFactory(param))
    })
    return {
      'params': outputParams,
      'name': this.funcName
    }
  }
}

export class CommandAssign {
  target = ''
  source: Expr = new ExprConst()

  cmdName (): string {
    return 'CommandAssign'
  }

  input (obj: any) {
    this.target = obj['target']
    this.source = exprInputFactory(obj['source'])
  }

  output (): YamlObj {
    return {
      'target': this.target,
      'source': exprOutputFactory(this.source)
    }
  }
}

export class CommandList {
  cmds: Command[] = []

  cmdName (): string {
    return 'CommandList'
  }

  input (obj: any) {
    this.cmds = []
    obj.forEach((cmdObj: any) => {
      this.cmds.push(commandInputFactory(cmdObj))
    });
  }

  output (): YamlObj[] {
    const ret: YamlObj[] = []
    this.cmds.forEach((cmd: Command) => {
      ret.push(commandOutputFactory(cmd))
    })
    return ret
  }
}

export class CommandIf {
  cond: Expr = new ExprConst()
  body: CommandList = new CommandList()
  else: CommandList = new CommandList()

  cmdName (): string {
    return 'CommandIf'
  }

  input (obj: any) {
    this.cond = exprInputFactory(obj['condition'])
    if (obj['then']) {
      this.body.input(obj['then'])
    }

    if (obj['else']) {
      this.else.input(obj['else'])
    }
  }

  output (): YamlObj {
    return {
      'condition': exprOutputFactory(this.cond),
      'then': this.body.output(),
      'else': this.else.output()
    }
  }
}

export class CommandWhile {
  cond: Expr = new ExprConst()
  body: CommandList = new CommandList()

  cmdName (): string {
    return 'CommandWhile'
  }

  input (obj: any) {
    this.cond = exprInputFactory(obj['condition'])
    this.body.input(obj['body'])
  }

  output (): YamlObj {
    return {
      'condition': exprOutputFactory(this.cond),
      'body': this.body.output(),
    }
  }
}

export class CommandVar {
  name = ''
  value: Value = null

  cmdName (): string {
    return 'CommandVar'
  }

  input (obj: any) {
    this.name = obj['name']
    this.value = obj['value']
  }

  output (): YamlObj {
    return {
      'name': this.name,
      'type': typeOfValue(this.value),
      'value': this.value
    }
  }
}

export class CommandReturn {
  retValue: Expr = new ExprConst()

  cmdName (): string {
    return 'CommandReturn'
  }

  input (obj: any) {
    this.retValue = exprInputFactory(obj)
  }

  output (): YamlObj {
    return exprOutputFactory(this.retValue)
  }
}

export class CommandBreak {

  cmdName (): string {
    return 'CommandBreak'
  }

  input (obj: any) {
    return
  }

  output (): YamlObj {
    return {}
  }
}

export class CommandContinue {

  cmdName (): string {
    return 'CommandContinue'
  }

  input (obj: any) {
    return
  }

  output (): YamlObj {
    return {}
  }
}

export type Command =
  CommandList | CommandAssign | CommandIf |
  CommandWhile | CommandVar | CommandCall |
  CommandReturn | CommandBreak | CommandContinue

commandConstructMap.set('list', () => new CommandList())
commandConstructMap.set('assign', () => new CommandAssign())
commandConstructMap.set('if', () => new CommandIf())
commandConstructMap.set('while', () => new CommandWhile())
commandConstructMap.set('var', () => new CommandVar())
commandConstructMap.set('call', () => new CommandCall())
commandConstructMap.set('return', () => new CommandReturn())
commandConstructMap.set('break', () => new CommandBreak())
commandConstructMap.set('continue', () => new CommandContinue())
