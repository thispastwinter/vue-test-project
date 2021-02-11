<template>
  <div>
    <p id="header1">{{ title }}</p>
  </div>
</template>

<script>
import Vue from "vue"

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
})
</script>

<style>
#header1 {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
