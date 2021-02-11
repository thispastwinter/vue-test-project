<template>
  <Container>
    <div>
      <Header :title="'My To-Do App'" />
      <ListToDo />
    </div>
  </Container>
</template>

<script lang="ts">
import Container from "@/components/Container.vue"
import Header from "@/components/Header.vue"
import ListToDo from "@/components/ListToDo.vue"
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  components: {
    Header,
    Container,
    ListToDo,
  },
})
</script>
