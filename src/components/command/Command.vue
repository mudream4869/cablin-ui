<template>
  <div>
    <CommandListComp v-if="cmdType() === 'CommandList'" :cmd="cmd"/>
    <command-assign-comp v-if="cmdType() == 'CommandAssign'" :cmd="cmd"/>
    <command-if-comp v-if="cmdType() == 'CommandIf'" :cmd="cmd"/>
    <command-while-comp v-if="cmdType() == 'CommandWhile'" :cmd="cmd"/>
    <command-call-comp v-if="cmdType() == 'CommandCall'" :cmd="cmd"/>
    <command-return-comp v-if="cmdType() == 'CommandReturn'" :cmd="cmd"/>
    <command-break-comp v-if="cmdType() == 'CommandBreak'" :cmd="cmd"/>
    <command-continue-comp v-if="cmdType() == 'CommandContinue'" :cmd="cmd"/>
    <command-var-comp v-if="cmdType() == 'CommandVar'" :cmd="cmd"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Command } from '../../cablin/commands';

@Component({
  components: {
    CommandIfComp: () => import('./CommandIf.vue'),
    CommandWhileComp: () => import('./CommandWhile.vue'),
    CommandListComp: () => import('./CommandList.vue'),
    CommandAssignComp: () => import('./CommandAssign.vue'),
    CommandCallComp: () => import('./CommandCall.vue'),
    CommandReturnComp: () => import('./CommandReturn.vue'),
    CommandContinueComp: () => import('./CommandContinue.vue'),
    CommandBreakComp: () => import('./CommandBreak.vue'),
    CommandVarComp: () => import('./CommandVar.vue'),
  },
})
export default class CommandComp extends Vue {
  @Prop() private cmd!: Command
  cmdType (): string {
    return this.cmd.cmdName()
  }
}
</script>

<style scoped>
</style>
