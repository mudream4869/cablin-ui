<template>
  <div>
    <b-form-select
      class="mb-2 mr-sm-2 mb-sm-0"
      :options="BinaryOps"
      v-model="expr.name"
    ></b-form-select>
    <expr-comp v-model="expr.expr1"></expr-comp>
    <expr-comp v-model="expr.expr2"></expr-comp>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ExprBinaryOp, BinaryOps } from '../../cablin/exprs';
import ExprComp from './Expr.vue';

@Component({
  components: {
    ExprComp,
  },
})
export default class ExprUnaryOpComp extends Vue {
  @Prop() private expr!: ExprBinaryOp
  BinaryOps = BinaryOps
}
</script>

<style scoped>
</style>
