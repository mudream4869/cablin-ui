<template>
  <div>
    <b-input-group prepend="target: " class="mb-2 mr-sm-2 mb-sm-0">
      <b-form-input v-model="cmd.target" placeholder="Var Name"></b-form-input>
    </b-input-group>
    <expr-comp v-model="cmd.source"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CommandAssign } from '../../cablin/commands';
import ExprComp from '../expr/Expr.vue';

@Component({
  components: {
    ExprComp,
  }
})
export default class CommandAssignComp extends Vue {
  @Prop() private cmd!: CommandAssign
}
</script>

<style scoped>
</style>
