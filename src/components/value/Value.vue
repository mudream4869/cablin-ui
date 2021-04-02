<template>
  <div>
    <b-form inline>
      <b-form-select
        class="mb-2 mr-sm-2 mb-sm-0"
        :options="['null', 'number', 'string', 'boolean']"
        v-model="typeName"
        @change="updateValue"
      ></b-form-select>

      <b-form-input v-if="typeName == 'string'"
                    v-model="vStr"
                    @input="updateValue"></b-form-input>

      <b-form-input v-if="typeName == 'number'"
                    type="number"
                    v-model.number="vNum"
                    @input="updateValue"></b-form-input>

      <b-form-select
        id="inline-form-bool"
        class="mb-2 mr-sm-2 mb-sm-0"
        :options="[{text: 'true', value: true}, {text: 'false', value: false}]"
        v-if="typeName == 'boolean'"
        v-model="vBool"
        @change="updateValue"
      ></b-form-select>

    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Value } from '../../cablin/value';

@Component
export default class ValueComp extends Vue {
  @Prop() private value!: Value
  private typeName = 'null'
  private vStr = ''
  private vBool = false
  private vNum = 0

  constructor () {
    super()
    switch (typeof this.value) {
    case 'string':
      this.typeName = 'string'
      this.vStr = this.value
      break
    case 'number':
      this.typeName = 'number'
      this.vNum = this.value
      break
    case 'boolean':
      this.typeName = 'boolean'
      this.vBool = this.value
      break
    default:
      this.typeName = 'null'
    }
  }

  updateValue () {
    let retValue: Value = null
    switch (this.typeName) {
    case 'null':
      retValue = null
      break;
    case 'string':
      retValue = this.vStr
      break;
    case 'boolean':
      retValue = this.vBool
      break;
    case 'number':
      retValue = this.vNum
      break;
    default:
      retValue = null
      break;
    }

    this.$emit('input', retValue)
  }
}
</script>

<style scoped>
</style>
