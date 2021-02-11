<template>
  <List :label="'title'" :list="toDos" />
</template>

<script lang="ts">
import { defineComponent, PropOptions } from "@nuxtjs/composition-api"
import List from "@/components/List.vue"
import { ToDo } from "@/types"

export default defineComponent({
  components: {
    List,
  },
  props: {
    toDos: {
      type: Array,
      required: true,
    } as PropOptions<ToDo[]>,
  },
})
</script>
