<template>
  <div>
    <p :class="variant"><slot /></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "regular"

export default defineComponent({
  props: {
    variant: {
      type: String as () => Variant,
      required: true,
    },
  },
})
</script>

<style>
:root {
  --default-font-family: "Quicksand", "Source Sans Pro", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --default-Color: #35495e;
}
.h1 {
  font-family: var(--default-font-family);
  font-weight: 300;
  font-size: 120px;
  color: var(--default-Color);
  letter-spacing: 1px;
}
.h2 {
  font-family: var(--default-font-family);
  font-weight: 300;
  font-size: 96px;
  color: var(--default-Color);
}
.h3 {
  font-family: var(--default-font-family);
  font-weight: 300;
  font-size: 72px;
  color: var(--default-Color);
}
.h4 {
  font-family: var(--default-font-family);
  font-weight: 300;
  font-size: 48px;
  color: var(--default-Color);
}
.h5 {
  font-family: var(--default-font-family);
  font-weight: 300;
  font-size: 24px;
  color: var(--default-Color);
}
.regular {
  font-family: var(--default-font-family);
  color: var(--default-Color);
  font-size: 16;
}
</style>
