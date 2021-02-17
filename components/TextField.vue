<template>
  <div class="mt-1 flex rounded-md shadow-sm">
    <input
      type="text"
      :placeholder="placeholder"
      :value="value"
      class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
      @input="handleInput"
      @keydown.enter="onEnter"
    />
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "Type something...",
    },
    value: {
      type: String,
      required: false,
      default: "",
    },
    onEnter: {
      type: Function,
      required: false,
      default: () => null,
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value)
    },
  },
})
</script>
