<template>
  <div>
    <ul>
      <li v-for="(list, index) in lists" :key="index">
        <Typography>{{ list.title }}</Typography>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropOptions } from "@nuxtjs/composition-api"
import { ToDoList } from "@/types"

export default defineComponent({
  props: {
    lists: {
      type: Array,
      required: true,
    } as PropOptions<ToDoList[]>,
  },
})
</script>
