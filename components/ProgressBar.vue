<template>
  <div class="h-3 relative rounded-full overflow-hidden">
    <div class="w-full h-full bg-gray-200 absolute"></div>
    <div
      class="h-full bg-green-500 absolute progress-bar"
      :style="getWidth()"
    ></div>
  </div>
</template>

<script language="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  props: {
    percentage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    getWidth() {
      return `width: ${this.percentage}%`
    },
  },
})
</script>

<style>
.progress-bar {
  transition: 0.5s;
}
</style>
