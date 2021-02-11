<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item[label]">
        {{ item[label] }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  props: {
    list: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
})
</script>
