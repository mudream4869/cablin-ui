import { CommandCall } from './commands'
import { inputValue, outputValue, Value } from './value'
import { YamlObj } from './yamlobj'

const exprTypeMap = new Map<string, string>()
exprTypeMap.set('ExprConst', 'const')
exprTypeMap.set('ExprVar', 'get')
exprTypeMap.set('ExprCall', 'call')

const exprConstructMap = new Map<string, {(): Expr}>()

function getExprType(expr: Expr): string {
  const name = exprTypeMap.get(expr.exprName())
  if (name === undefined) {
    return ''
  }
  return name
}

export function exprOutputFactory(expr: Expr): YamlObj {
  const name = getExprType(expr)
  const ret: {
    [key: string]: YamlObj;
  } = {}
  ret[name] = expr.output()
  return ret
}

export function exprInputFactory(obj: any): Expr {
  for (const key in obj) {
    const value = obj[key]
    const func = exprConstructMap.get(key)
    if (func === undefined) {
      continue
    }
    const expr = func()
    expr.input(value)
    return expr
  }

  throw 'Expr type name error'
}

export class ExprConst {
  val: Value = null

  exprName (): string {
    return 'ExprConst'
  }

  input (obj: any) {
    this.val = inputValue(obj)
  }

  output (): YamlObj {
    return outputValue(this.val)
  }
}

export class ExprVar {
  name = ''

  exprName (): string {
    return 'ExprVar'
  }

  input (obj: any) {
    this.name = obj
  }

  output (): YamlObj {
    return this.name
  }
}

export class ExprCall {
  cmdCall = new CommandCall()

  exprName (): string {
    return 'ExprCall'
  }

  input (obj: any) {
    this.cmdCall.input(obj)
  }

  output (): YamlObj {
    return this.cmdCall.output()
  }
}

export type Expr = ExprConst | ExprVar | ExprCall;

exprConstructMap.set('const', () => new ExprConst())
exprConstructMap.set('get', () => new ExprVar())
exprConstructMap.set('call', () => new ExprCall())
