export type Value = number | string | boolean | null

export function typeOfValue(v: Value): string {
  switch (typeof v) {
  case 'string':
    return 'string'
  case 'number':
    return 'int'
  case 'boolean':
    return 'bool'
  default:
    return 'null'
  } 
}

export function outputValue(v: Value): object {
  return {
    'type': typeOfValue(v),
    'value': v
  }
}

export function inputValue(d: any): Value {
  return d['value']
}
