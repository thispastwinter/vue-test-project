<template>
  <Container>
    <div>
      <Typography class="mb-8" variant="h2">My To-Do App</Typography>
      <TextField
        v-model="toDo"
        type="text"
        placeholder="Add a To-do"
        :on-enter="onEnterToDo"
      />
      <Typography variant="regular">{{ toDo }}</Typography>
      <div class="mb-8" />
      <div class="container">
        <div>
          <Typography variant="h5">Completed</Typography>
          <ListToDo :to-dos="completedToDos" />
        </div>
        <div>
          <Typography variant="h5">Incomplete</Typography>
          <ListToDo :to-dos="incompleteToDos" />
        </div>
      </div>
    </div>
  </Container>
</template>

<script lang="ts">
import Typography from "@/components/Typography.vue"
import Container from "@/components/Container.vue"
import ListToDo from "@/components/ListToDo.vue"
import { defineComponent, toRefs } from "@nuxtjs/composition-api"
import { useToDos } from "@/compositions"
import TextField from "@/components/TextField.vue"

export default defineComponent({
  components: {
    Typography,
    Container,
    ListToDo,
    TextField,
  },
  setup() {
    const { state, onEnterToDo, completedToDos, incompleteToDos } = useToDos()
    return {
      ...toRefs(state),
      onEnterToDo,
      completedToDos,
      incompleteToDos,
    }
  },
})
</script>

<style scoped>
.container {
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
}
</style>
