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
import { Mutations, ToDo } from "@/types"
import { store } from "@/store"
import Typography from "./Typography.vue"

export default defineComponent({
  components: { Typography },
  props: {
    toDos: {
      type: Array,
      required: true,
    } as PropOptions<ToDo[]>,
  },
  methods: {
    handleClick(toDo: ToDo) {
      store.commit(Mutations.TOGGLE_TODO, toDo)
    },
  },
})
</script>

<style>
.complete {
  text-decoration-line: line-through;
}
</style>
