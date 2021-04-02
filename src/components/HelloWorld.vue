<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="GUI" active>
        <b-button
          @click="testExample(title)"
          v-for="title in Object.keys(examples)"
          v-bind:key="title">
          {{title}}
        </b-button>
        <CommandComp :cmd="cmd" :key="forceKey" />
      </b-tab>
      <b-tab title="YAML">
        <pre style='padding-left: 10px'><code>{{ yamlDump }}</code></pre>
      </b-tab>
      <b-tab title="Execute">
        <b-button variant="primary" @click="execute">執行</b-button>
        <pre style='padding-left: 10px'><code>{{ stdout }}</code></pre>
        <pre v-if="stderr != ''"
             style='padding-left: 10px; color: red;'>
          <code>{{ stderr }}</code></pre>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CommandComp from './command/Command.vue';
import { CommandList, Command } from '../cablin/commands';
import * as yaml from 'js-yaml';
import { EXAMPLE_HELLOWORLD, EXAMPLE_PLUS, EXAMPLE_IF, EXAMPLE_WHILE_LOOP } from '../examples/examples';

declare const Module: any

function cablinRun(s: string, printFunc: any): string {
  const cablinRunWrap = Module.cwrap('cablinRun', 'number', ['string'], ['pointer'])
  const getCablinError = Module.cwrap('getCablinError', 'string')
  const printFuncPtr = Module.addFunction((msg: any) => {
    printFunc(Module.UTF8ToString(msg))
  })
  if (cablinRunWrap(s, printFuncPtr) != 0) {
    Module.removeFunction(printFuncPtr)
    return getCablinError()
  }

  Module.removeFunction(printFuncPtr)
  return ''
}

@Component({
  components: {
    CommandComp,
  },
})
export default class HelloWorld extends Vue {
  private cmd: Command = new CommandList()
  private stdout = ''
  private stderr = ''

  private examples: any = {
    'Hello world': EXAMPLE_HELLOWORLD,
    '1 + 2': EXAMPLE_PLUS,
    'If Branch': EXAMPLE_IF,
    'While Loop': EXAMPLE_WHILE_LOOP,
  }

  private forceKey = 0

  mounted() {
    const cmdList = new CommandList()
    this.cmd = cmdList
  }

  testExample(title: string) {
    this.cmd.input(yaml.load(this.examples[title]))
    this.forceKey = 1 - this.forceKey
  }

  get yamlDump(): string {
    const fullProg = [
      {'import': 'my'},
      {'import': 'io'},
      {'import': 'op'},
      {'import': 'cast'},
      {'func': {
          'name': 'main',
          'body': this.cmd.output(),
      }},
    ]
    return yaml.dump(fullProg, {'sortKeys': true})
  }

  logging(msg: string) {
    this.stdout += msg + '\n'
  }

  execute() {
    this.stdout = ''
    this.stderr = cablinRun(this.yamlDump, this.logging)
  }
}
</script>

<style scoped>
</style>
