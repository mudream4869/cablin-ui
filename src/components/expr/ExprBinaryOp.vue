<template>
  <div>
    <b-form-select
      class="mb-2 mr-sm-2 mb-sm-0"
      :options="BinaryOps"
      v-model="expr.name"
    ></b-form-select>
    <simple-expr-comp v-model="expr.expr1"/>
    <simple-expr-comp v-model="expr.expr2"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ExprBinaryOp, BinaryOps } from '../../cablin/exprs';
import SimpleExprComp from './SimpleExpr.vue';

@Component({
  components: {
    SimpleExprComp,
  },
})
export default class ExprUnaryOpComp extends Vue {
  @Prop() private expr!: ExprBinaryOp
  BinaryOps = BinaryOps
}
</script>

<style scoped>
</style>
