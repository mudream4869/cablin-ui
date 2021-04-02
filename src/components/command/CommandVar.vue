<template>
  <div>
    <b-form inline>
      <b-input-group prepend="var: " class="mb-2 mr-sm-2 mb-sm-0">
        <b-form-input v-model="cmd.name" placeholder="Var Name"></b-form-input>
      </b-input-group>
      <value-comp v-model="cmd.value"/>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { CommandVar } from '../../cablin/commands';
import ValueComp from '../value/Value.vue';

@Component({
  components: {
    ValueComp,
  }
})
export default class CommandVarComp extends Vue {
  @Prop() private cmd!: CommandVar
}
</script>

<style scoped>
</style>
