<template>
  <div>
    <b-input-group prepend="Call function: " class="mb-2 mr-sm-2 mb-sm-0">
      <b-form-select
        v-model="cmd.funcName"
        :options="funcList"
      ></b-form-select>
    </b-input-group>

    <b-list-group>
      <b-list-group-item v-for="(param, i) in cmd.params" v-bind:key="i">
        <b-form inline>
          <expr-comp v-model="cmd.params[i]"/>
        </b-form>
      </b-list-group-item>
      <b-list-group-item>
        <b-button variant="primary" @click="addParam">+</b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CommandCall } from '../../cablin/commands';
import { ExprConst } from '../../cablin/exprs';
import ExprComp from '../expr/Expr.vue';
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'

@Component({
  components: {
    ExprComp,
    VueBootstrapTypeahead,
  }
})
export default class CommandCallComp extends Vue {
  @Prop() private cmd!: CommandCall

  private funcList: string[] = [
    'cast::int',
    'cast::int64',
    'cast::float',
    'my::print',
  ]

  addParam () {
    this.cmd.params.push(new ExprConst())
  }
}
</script>

<style scoped>
</style>
