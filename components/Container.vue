<template>
  <div class="container">
    <div class="flex-1">
      <slot />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api"
export default defineComponent({})
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
