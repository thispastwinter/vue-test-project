<template>
  <container>
    <div class="flex-1">
      <Typography class="mb-8" variant="h2">To-Do List</Typography>
      <TextField
        v-model="toDo"
        class="mx-24"
        placeholder="Add a To-do"
        :on-enter="onEnterToDo"
      />
      <ProgressBar :percentage="percentage" class="mx-24 my-4" />
      <Typography v-if="percentage === 100"
        >Congrats! You did it! 🎉</Typography
      >
      <Typography v-if="percentage < 100">{{
        `${percentage}% complete`
      }}</Typography>
      <div class="mb-8" />
      <div class="container">
        <div>
          <Typography variant="h5" class="mb-2">Completed</Typography>
          <ListToDo :to-dos="completedToDos" />
        </div>
        <div>
          <Typography variant="h5" class="mb-2">Incomplete</Typography>
          <ListToDo :to-dos="incompleteToDos" />
        </div>
      </div>
    </div>
  </container>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "@nuxtjs/composition-api"
import { useToDos } from "@/compositions"
import {
  ListToDo,
  TextField,
  Typography,
  Container,
  ProgressBar,
} from "@/components"

export default defineComponent({
  components: {
    Typography,
    ListToDo,
    TextField,
    Container,
    ProgressBar,
  },
  setup() {
    const {
      state,
      onEnterToDo,
      completedToDos,
      incompleteToDos,
      percentageComplete,
    } = useToDos()
    return {
      ...toRefs(state),
      onEnterToDo,
      completedToDos,
      incompleteToDos,
      percentageComplete,
    }
  },
  computed: {
    percentage(): number {
      const number: number = (this.percentageComplete as number) * 100 || 0
      return parseInt(number.toFixed(0))
    },
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
