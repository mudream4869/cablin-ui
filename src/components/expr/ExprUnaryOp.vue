<template>
  <div>
    <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
      <b-form-select
        class="mb-2 mr-sm-2 mb-sm-0"
        :options="UnaryOps"
        v-model="expr.name"
      ></b-form-select>
      <simple-expr-comp v-model="expr.expr"/>
    </b-input-group>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ExprUnaryOp, UnaryOps } from '../../cablin/exprs';
import SimpleExprComp from './SimpleExpr.vue';

@Component({
  components: {
    SimpleExprComp,
  },
})
export default class ExprUnaryOpComp extends Vue {
  @Prop() private expr!: ExprUnaryOp
  UnaryOps = UnaryOps
}
</script>

<style scoped>
</style>
