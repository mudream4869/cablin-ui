export const EXAMPLE_HELLOWORLD =`
- call:
    name: 'my::print'
    params:
      - const:
          type: string
          value: Hello world!
`

export const EXAMPLE_PLUS =`
- call:
    name: 'my::print'
    params:
      - call:
          name: 'op::plus'
          params:
            - const:
                type: number
                value: 1
            - const:
                type: number
                value: 2
`

export const EXAMPLE_IF = `
- if:
    condition:
      const:
        type: boolean
        value: true
    else:
      - call:
          name: 'my::print'
          params:
            - const:
                type: string
                value: ':''('
    then:
      - call:
          name: 'my::print'
          params:
            - const:
                type: string
                value: IF works!
`

export const EXAMPLE_WHILE_LOOP = `
- var:
    name: i
    type: int
    value: 0
- while:
    condition:
      call:
        name: 'op::less'
        params:
          - get: i
          - const:
              type: int
              value: 10
    body:
      - call:
          name: 'my::print'
          params:
            - get: i
      - assign:
          target: i
          source:
            call:
              name: 'op::plus'
              params:
                - get: i
                - const:
                    type: int
                    value: 1
`