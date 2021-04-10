<template>
  <div>
    <b-input-group prepend="Return " class="mb-2 mr-sm-2 mb-sm-0">
      <expr-comp v-model="cmd.retValue"/>
    </b-input-group>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CommandReturn } from '../../cablin/commands';
import ExprComp from '../expr/Expr.vue';

@Component({
  components: {
    ExprComp,
  }
})
export default class CommandReturnComp extends Vue {
  @Prop() private cmd!: CommandReturn
}
</script>

<style scoped>
</style>
