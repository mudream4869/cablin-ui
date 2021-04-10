<template>
  <div>
    Continue the loop
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CommandContinue } from '../../cablin/commands';

@Component
export default class CommandContinueComp extends Vue {
  @Prop() private cmd!: CommandContinue
}
</script>

<style scoped>
</style>
