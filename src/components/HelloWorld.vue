<template>
  <div>
    <b-tabs content-class="mt-3" v-model="tabIndex" pills card>
      <b-tab title="GUI" active>
        <b-button-toolbar class="mx-1">
          <b-button-group>
            <b-button
              @click="testExample(title)"
              v-for="title in Object.keys(examples)"
              v-bind:key="title">
              {{title}}
            </b-button>
          </b-button-group>
          <b-button variant="primary" @click="execute" class="mx-1">
            <b-icon icon="play"></b-icon>Run</b-button>
        </b-button-toolbar>
        <CommandComp :cmd="cmd" :key="forceKey" />
      </b-tab>
      <b-tab title="YAML">
        <pre style='padding-left: 10px'><code>{{ yamlDump }}</code></pre>
      </b-tab>
      <b-tab title="Execute Result">
        <b-alert show variant="danger" v-if="stderr != ''">{{ stderr }}</b-alert>
        <pre style='padding-left: 10px'><code>{{ stdout }}</code></pre>
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
  private tabIndex = 0

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
    this.tabIndex = 2
    console.log(this.yamlDump)
    this.stderr = cablinRun(this.yamlDump, this.logging)
  }
}
</script>

<style scoped>
</style>
