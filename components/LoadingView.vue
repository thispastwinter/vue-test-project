<template>
  <div v-if="loading"><p>Loading...</p></div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
