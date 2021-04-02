<template>
  <div>
    <command-call-comp :cmd="expr.cmdCall"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ExprCall } from '../../cablin/exprs';
import CommandCallComp from '../command/CommandCall.vue';

@Component({
  components: {
    CommandCallComp,
  },
})
export default class ExprCallComp extends Vue {
  @Prop() private expr!: ExprCall
}
</script>

<style scoped>
</style>
