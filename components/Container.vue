<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api"
export default defineComponent({})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
