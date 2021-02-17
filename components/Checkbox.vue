<template>
  <div class="mr-2">
    <input
      :id="id"
      type="checkbox"
      :value="value"
      class="checked:bg-blue-600 checked:border-transparent ..."
      @click="handleClick"
    />
  </div>
</template>

<script language="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  props: {
    value: {
      type: String,
      default: "",
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    handleClick: {
      type: Function,
      required: true,
    },
  },
})
</script>
