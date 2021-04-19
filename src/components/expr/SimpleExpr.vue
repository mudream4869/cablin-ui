<template>
  <div>
    <b-form inline>
      <b-form-select
        class="mb-2 mr-sm-2 mb-sm-0"
        :options="options"
        v-model="typeName"
        @change="updateValue"
      ></b-form-select>

      <ExprConstComp v-if="typeName === 'const'" :expr="vConst"/>
      <ExprVarComp v-if="typeName === 'get'" :expr="vVar"/>
      <ExprUnaryOpComp v-if="typeName === 'unary op'" :expr="vUnaryOp"/>
      <ExprBinaryOpComp v-if="typeName === 'binary op'" :expr="vBinaryOp"/>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Expr, ExprConst, ExprVar, ExprUnaryOp, ExprBinaryOp, UnaryOps, BinaryOps } from '../../cablin/exprs';

@Component({
  components: {
    ExprConstComp: () => import('./ExprConst.vue'),
    ExprVarComp: () => import('./ExprVar.vue'),
    ExprUnaryOpComp: () => import('./ExprUnaryOp.vue'),
    ExprBinaryOpComp: () => import('./ExprBinaryOp.vue'),
  },
})
export default class SimpleExprComp extends Vue {
  @Prop() private value!: Expr
  private typeName = 'const'
  private vConst: Expr = new ExprConst()
  private vVar: Expr = new ExprVar()
  private vUnaryOp: Expr = new ExprUnaryOp('neg')
  private vBinaryOp: Expr = new ExprBinaryOp('plus')

  private options = [
    {text: 'Constant', value: 'const'},
    {text: 'Variable', value: 'get'},
    {text: 'Unary Operator', value: 'unary op'},
    {text: 'Binary Operator', value: 'binary op'},
  ]

  constructor () {
    super()
    switch (this.value.exprName()) {
    case 'const':
      this.typeName = 'const'
      this.vConst = this.value
      break
    case 'get':
      this.typeName = 'get'
      this.vVar = this.value
      break
    default:
      if (UnaryOps.indexOf(this.value.exprName()) > -1) {
        this.typeName = 'unary op'
        this.vUnaryOp = this.value
      } else if (BinaryOps.indexOf(this.value.exprName()) > -1) {
        this.typeName = 'binary op'
        this.vBinaryOp = this.value
      }
    }
  }

  updateValue () {
    let retValue: Expr = new ExprConst()
    switch (this.typeName) {
    case 'const':
      retValue = this.vConst
      break
    case 'get':
      retValue = this.vVar
      break
    case 'unary op':
      retValue = this.vUnaryOp
      break
    case 'binary op':
      retValue = this.vBinaryOp
      break
    }

    this.$emit('input', retValue)
  }
}
</script>

<style scoped>
</style>
