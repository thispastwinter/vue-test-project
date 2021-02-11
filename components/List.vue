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
import Vue from "vue"

export default Vue.extend({
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
})
</script>
