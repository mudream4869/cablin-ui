<template>
  <div>
    <expr-comp v-model="cmd.retValue"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CommandReturn } from '../../cablin/commands';
import ExprComp from '../expr/Expr.vue';

@Component({
  components: {
    ExprComp,
  }
})
export default class CommandReturnComp extends Vue {
  @Prop() private cmd!: CommandReturn
}
</script>

<style scoped>
</style>
