<template>
  <div>
    <b-form inline>
      <b-form-select
        class="mb-2 mr-sm-2 mb-sm-0"
        :options="['const', 'get', 'call', 'unary op', 'binary op']"
        v-model="typeName"
        @change="updateValue"
      ></b-form-select>

      <ExprConstComp v-if="typeName === 'const'" :expr="vConst"/>
      <ExprVarComp v-if="typeName === 'get'" :expr="vVar"/>
      <ExprCallComp v-if="typeName === 'call'" :expr="vCall"/>
      <ExprUnaryOpComp v-if="typeName === 'unary op'" :expr="vUnaryOp"/>
      <ExprBinaryOpComp v-if="typeName === 'binary op'" :expr="vBinaryOp"/>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Expr, ExprCall, ExprConst, ExprVar, ExprUnaryOp, ExprBinaryOp, UnaryOps, BinaryOps } from '../../cablin/exprs';

@Component({
  components: {
    ExprConstComp: () => import('./ExprConst.vue'),
    ExprVarComp: () => import('./ExprVar.vue'),
    ExprCallComp: () => import('./ExprCall.vue'),
    ExprUnaryOpComp: () => import('./ExprUnaryOp.vue'),
    ExprBinaryOpComp: () => import('./ExprBinaryOp.vue'),
  },
})
export default class ExprComp extends Vue {
  @Prop() private value!: Expr
  private typeName = 'const'
  private vConst: Expr = new ExprConst()
  private vVar: Expr = new ExprVar()
  private vCall: Expr = new ExprCall()
  private vUnaryOp: Expr = new ExprUnaryOp('neg')
  private vBinaryOp: Expr = new ExprBinaryOp('plus')

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
    case 'call':
      this.typeName = 'call'
      this.vCall = this.value
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
    case 'call':
      retValue = this.vCall
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
