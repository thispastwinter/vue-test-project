<template>
  <List :list="toDos" />
</template>

<script lang="ts">
import Vue from "vue"

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

export default Vue.extend({
  data() {
    return { toDos }
  },
})
</script>
