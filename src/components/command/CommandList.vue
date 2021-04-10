<template>
  <div>
    <b-list-group>
      <drop @drop="onDrop($event, i+1)">
        <b-list-group-item @mouseover="hoverIndex = 0">
          <b-form inline v-show="hoverIndex == 0">
            <b-form-select
              class="mb-2 mr-sm-2 mb-sm-0"
              v-model="selectAdd"
              :options="cmdList(0)"
            ></b-form-select>
            <b-button variant="primary" @click="addCmd">+</b-button>
          </b-form>
        </b-list-group-item>
      </drop>

      <div v-for="(c, i) in cmd.cmds" v-bind:key="i">
        <drag @dragstart="startDrag($event, i)">
          <b-list-group-item @mouseover="hoverIndex = null">
            <div class="container">
              <div class="row">
                <div class="col-1">
                  <div class="h2 mb-0">
                    <b-icon icon="x-circle" title="刪除" variant="danger" @click="deleteCmd(i)">
                    </b-icon>
                  </div>
                </div>
                <div class="col-11">
                  <CommandComp :cmd="c"/>
                </div>
              </div>
            </div>
          </b-list-group-item>
        </drag>

        <drop @drop="onDrop($event, i+1)">
          <b-list-group-item @mouseover="hoverIndex = i+1">
            <b-form inline v-show="hoverIndex == i+1">
              <b-form-select
                class="mb-2 mr-sm-2 mb-sm-0"
                v-model="selectAdd"
                :options="cmdList()"
              ></b-form-select>
              <b-button variant="primary" @click="addCmd(i+1)">+</b-button>
            </b-form>
          </b-list-group-item>
        </drop>
      </div>

    </b-list-group>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Command, CommandAssign, CommandList,
         CommandIf, CommandWhile, CommandContinue, CommandBreak,
         CommandCall, CommandReturn, CommandVar } from '../../cablin/commands';
import CommandComp from './Command.vue'
import { Drag, Drop } from 'vue-drag-drop';

const commandMap = new Map<string,{(): Command}>()

commandMap.set('Assign', () => new CommandAssign())
commandMap.set('If', () => new CommandIf())
commandMap.set('While', () => new CommandWhile())
commandMap.set('Call', () => new CommandCall())
commandMap.set('Var', () => new CommandVar())
commandMap.set('Return', () => new CommandReturn())
commandMap.set('Continue', () => new CommandContinue())
commandMap.set('Break', () => new CommandBreak())

const commandList = [...commandMap.keys()]

@Component({
  components: {
    CommandComp,
    Drag,
    Drop,
  },
})
export default class CommandListComp extends Vue {
  @Prop() private cmd!: CommandList

  private selectAdd: string | null = null
  private hoverIndex: number | null = null
  private dragIndex: number | null = null

  cmdList (): any[] {
    let ret: any[] = [{ text: 'Choose a command...', value: null }]
    ret = ret.concat(commandList)
    return ret
  }

  deleteCmd (index: number) {
    this.cmd.cmds.splice(index, 1)
  }

  addCmd (index: number) {
    if (this.selectAdd === null) {
      return
    }

    const func = commandMap.get(this.selectAdd)
    if (func === undefined) {
      return
    }

    this.cmd.cmds.splice(index, 0, func())
  }

  startDrag (evt: any, index: number) {
    this.dragIndex = index
  }

  onDrop (evt: any, index: number) {
    if (this.dragIndex === null) {
      return
    }

    const cmd = this.cmd.cmds[this.dragIndex]

    // same list causing index change
    if (this.dragIndex < index) {
      this.cmd.cmds.splice(this.dragIndex, 1)
      this.cmd.cmds.splice(index - 1, 0, cmd)
    } else if (this.dragIndex > index) {
      this.cmd.cmds.splice(this.dragIndex, 1)
      this.cmd.cmds.splice(index, 0, cmd)
    }

    this.dragIndex = null
  }
}
</script>

<style scoped>
</style>
