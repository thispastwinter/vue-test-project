<template>
  <div>
    <ul>
      <li v-for="(toDo, index) in toDos" :key="index">
        <div
          class="flex justify-center items-center"
          @click="handleClick(toDo)"
        >
          <Typography variant="regular" :class="{ complete: toDo.complete }">{{
            toDo.title
          }}</Typography>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropOptions } from "@nuxtjs/composition-api"
import { ToDo } from "@/types"
import { useToDos } from "@/compositions"
import Typography from "./Typography.vue"

export default defineComponent({
  components: { Typography },
  props: {
    toDos: {
      type: Array,
      required: true,
    } as PropOptions<ToDo[]>,
  },
  setup() {
    const { toggleToDo } = useToDos()
    return {
      toggleToDo,
    }
  },
  methods: {
    handleClick(toDo: ToDo) {
      this.toggleToDo(toDo)
    },
  },
})
</script>

<style>
.complete {
  text-decoration-line: line-through;
}
</style>
