<template>
  <div>
    <b-input-group prepend="If: " class="mb-2 mr-sm-2 mb-sm-0">
      <ExprComp v-model="cmd.cond" />
    </b-input-group>
    <command-list-comp :cmd="cmd.body" />
    <span> Else </span>
    <command-list-comp :cmd="cmd.else" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CommandIf } from '../../cablin/commands';
import ExprComp from '../expr/Expr.vue';
import CommandListComp from './CommandList.vue';

@Component({
  components: {
    ExprComp,
    CommandListComp,
  },
})
export default class CommandIfComp extends Vue {
  @Prop() private cmd!: CommandIf
}
</script>

<style scoped>
</style>
