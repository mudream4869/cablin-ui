<template>
  <div>
    <value-comp v-model="expr.val"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ExprConst } from '../../cablin/exprs';
import ValueComp from '../value/Value.vue'

@Component({
  components: {
    ValueComp,
  },
})
export default class ExprConstComp extends Vue {
  @Prop() private expr!: ExprConst
}
</script>

<style scoped>
</style>
