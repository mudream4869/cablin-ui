import { CommandCall } from './commands'
import { inputValue, outputValue, Value } from './value'
import { YamlObj } from './yamlobj'

const exprConstructMap = new Map<string, {(): Expr}>()

export function exprOutputFactory(expr: Expr): YamlObj {
  const name = expr.exprName()
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
    return 'const'
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
    return 'get'
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
    return 'call'
  }

  input (obj: any) {
    this.cmdCall.input(obj)
  }

  output (): YamlObj {
    return this.cmdCall.output()
  }
}

export class ExprUnaryOp {
  expr: Expr = new ExprConst()
  name = 'neg'

  constructor (name: string) {
    this.name = name
  }

  exprName (): string {
    return this.name
  }

  input (obj: any) {
    this.expr = exprInputFactory(obj)
  }

  output (): YamlObj {
    return exprOutputFactory(this.expr)
  }
}

export class ExprBinaryOp {
  expr1: Expr = new ExprConst()
  expr2: Expr = new ExprConst()
  name = 'plus'

  constructor (name: string) {
    this.name = name
  }

  exprName (): string {
    return this.name
  }

  input (obj: any) {
    this.expr1 = exprInputFactory(obj[0])
    this.expr2 = exprInputFactory(obj[1])
  }

  output (): YamlObj {
    return [exprOutputFactory(this.expr1), exprOutputFactory(this.expr2)]
  }
}

export type Expr = ExprConst | ExprVar | ExprCall | ExprUnaryOp | ExprBinaryOp;

exprConstructMap.set('const', () => new ExprConst())
exprConstructMap.set('get', () => new ExprVar())
exprConstructMap.set('call', () => new ExprCall())

export const UnaryOps = ['not', 'neg']
UnaryOps.forEach((key: string) => {
  exprConstructMap.set(key, () => new ExprUnaryOp(key))
})

export const BinaryOps = [
  'plus', 'minus', 'multiply', 'divide', 'mod',
  'and', 'or',
  'equal', 'not_equal', 'less', 'greater', 'less_equal', 'greater_equal'
]
BinaryOps.forEach((key: string) => {
  exprConstructMap.set(key, () => new ExprBinaryOp(key))
})