<template>
  <div>
    <b-form inline>
      <b-form-select
        class="mb-2 mr-sm-2 mb-sm-0"
        :options="['const', 'get', 'call']"
        v-model="typeName"
        @change="updateValue"
      ></b-form-select>

      <ExprConstComp v-if="typeName === 'const'" :expr="vConst"/>
      <ExprVarComp v-if="typeName === 'get'" :expr="vVar"/>
      <ExprCallComp v-if="typeName === 'call'" :expr="vCall"/>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Expr, ExprCall, ExprConst, ExprVar } from '../../cablin/exprs';

@Component({
  components: {
    ExprConstComp: () => import('./ExprConst.vue'),
    ExprVarComp: () => import('./ExprVar.vue'),
    ExprCallComp: () => import('./ExprCall.vue'),
  },
})
export default class ExprComp extends Vue {
  @Prop() private value!: Expr
  private typeName = 'const'
  private vConst: Expr = new ExprConst()
  private vVar: Expr = new ExprVar()
  private vCall: Expr = new ExprCall()

  constructor () {
    super()
    switch (this.value.exprName()) {
    case 'ExprConst':
      this.typeName = 'const'
      this.vConst = this.value
      break
    case 'ExprVar':
      this.typeName = 'get'
      this.vVar = this.value
      break
    case 'ExprCall':
      this.typeName = 'call'
      this.vCall = this.value
      break
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
    }

    this.$emit('input', retValue)
  }
}
</script>

<style scoped>
</style>
