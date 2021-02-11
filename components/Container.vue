<template>
  <div class="container"><slot /></div>
</template>

<script>
import Vue from "vue"
export default Vue.extend({})
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
