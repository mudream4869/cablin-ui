<template>
  <div>
    Break
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CommandBreak } from '../../cablin/commands';

@Component
export default class CommandBreakComp extends Vue {
  @Prop() private cmd!: CommandBreak
}
</script>

<style scoped>
</style>
