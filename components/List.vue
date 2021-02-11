<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.title">
        {{ item.project }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

const List = defineComponent({
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
})

export default List
</script>
