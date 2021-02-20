<template>
  <div>
    <ul>
      <li
        v-for="(list, index) in lists"
        :key="index"
        @click="() => setCurrentList(list.id)"
      >
        <Typography>{{ list.title }}</Typography>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropOptions } from "@nuxtjs/composition-api"
import { Typography } from "@/components"
import { Actions, ToDoList } from "@/types"
import { store } from "~/store"

export default defineComponent({
  components: {
    Typography,
  },
  props: {
    lists: {
      type: Array,
      required: true,
    } as PropOptions<ToDoList[]>,
  },
  methods: {
    setCurrentList(id: string) {
      store.dispatch(Actions.SET_CURRENT_LIST, id)
    },
  },
})
</script>
