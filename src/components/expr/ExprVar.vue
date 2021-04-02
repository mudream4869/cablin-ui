<template>
  <div>
    <b-form-input v-model="expr.name"></b-form-input>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ExprVar } from '../../cablin/exprs';

@Component
export default class ExprVarComp extends Vue {
  @Prop() private expr!: ExprVar
}
</script>

<style scoped>
</style>
