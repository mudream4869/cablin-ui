<template>
  <div>
    <b-input-group prepend="While: " class="mb-2 mr-sm-2 mb-sm-0">
      <ExprComp v-model="cmd.cond" />
    </b-input-group>
    <command-list-comp :cmd="cmd.body" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CommandWhile } from '../../cablin/commands'
import ExprComp from '../expr/Expr.vue';
import CommandListComp from './CommandList.vue';

@Component({
  components: {
    ExprComp,
    CommandListComp,
  },
})
export default class CommandWhileComp extends Vue {
  @Prop() private cmd!: CommandWhile
}
</script>

<style scoped>
</style>
