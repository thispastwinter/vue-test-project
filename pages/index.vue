<template>
  <div class="flex flex-row">
    <div class="shadow px-20 pt-8">
      <Typography class="mb-4" variant="h4">Lists</Typography>
      <ToDoLists :lists="lists" />
    </div>
    <div class="flex-auto">
      <Typography class="mb-8" variant="h2">{{ currentListTitle }}</Typography>
      <TextField
        v-model="toDo"
        class="mx-24"
        placeholder="Add a To-do"
        :on-enter="createToDo"
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api"
import { Actions, Getters, Mutations } from "@/constants"
import {
  ListToDo,
  TextField,
  Typography,
  ProgressBar,
  ToDoLists,
} from "@/components"
import { store } from "@/store"

export default defineComponent({
  components: {
    Typography,
    ListToDo,
    TextField,
    ToDoLists,
    ProgressBar,
  },
  setup() {
    const toDo = ref<string>("")
    return {
      toDo,
    }
  },
  computed: {
    currentListTitle() {
      return store.getters[Getters.CURRENT_LIST_TITLE]
    },
    completedToDos() {
      return store.getters[Getters.COMPLETED_TO_DOS]
    },
    incompleteToDos() {
      return store.getters[Getters.INCOMPLETE_TO_DOS]
    },
    lists() {
      return store.getters[Getters.GET_LISTS]
    },
    percentage() {
      return store.getters[Getters.PERCENTAGE_COMPLETE]
    },
  },
  beforeCreate() {
    store.dispatch(Actions.SET_DEFAULT_LIST)
  },
  methods: {
    createToDo() {
      store.commit(Mutations.CREATE_TODO, this.toDo)
      this.toDo = ""
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
