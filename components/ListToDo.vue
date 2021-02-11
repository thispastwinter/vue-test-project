<template>
  <List :list="toDos" />
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"
import List from "@/components/List.vue"

interface ToDo {
  title: string
  project: string
  complete: boolean
}

const toDos: ToDo[] = [
  {
    title: "Todo A",
    project: "Project A",
    complete: false,
  },
  {
    title: "Todo B",
    project: "Project B",
    complete: true,
  },
  {
    title: "Todo C",
    project: "Project C",
    complete: false,
  },
  {
    title: "Todo D",
    project: "Project D",
    complete: false,
  },
]

export default defineComponent({
  components: {
    List,
  },
  data() {
    return { toDos }
  },
})
</script>
