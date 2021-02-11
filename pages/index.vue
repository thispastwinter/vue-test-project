<template>
  <Container>
    <div>
      <Header :title="'My To-Do App'" />
      <LoadingView :loading="loading" />
      <ListToDo :to-dos="toDos" />
    </div>
  </Container>
</template>

<script lang="ts">
import Header from "@/components/Header.vue"
import Container from "@/components/Container.vue"
import ListToDo from "@/components/ListToDo.vue"
import LoadingView from "@/components/LoadingView.vue"
import { defineComponent, toRefs } from "@nuxtjs/composition-api"
import { useToDos } from "@/compositions"

export default defineComponent({
  components: {
    Header,
    Container,
    ListToDo,
    LoadingView,
  },
  setup() {
    const { toDoState } = useToDos()
    return {
      ...toRefs(toDoState),
    }
  },
})
</script>
