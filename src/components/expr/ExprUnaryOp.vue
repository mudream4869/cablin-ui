<template>
  <div>
    <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
      <b-form-select
        class="mb-2 mr-sm-2 mb-sm-0"
        :options="UnaryOps"
        v-model="expr.name"
      ></b-form-select>
      <expr-comp v-model="expr.expr"></expr-comp>
    </b-input-group>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ExprUnaryOp, UnaryOps } from '../../cablin/exprs';
import ExprComp from './Expr.vue';

@Component({
  components: {
    ExprComp,
  },
})
export default class ExprUnaryOpComp extends Vue {
  @Prop() private expr!: ExprUnaryOp
  UnaryOps = UnaryOps
}
</script>

<style scoped>
</style>
