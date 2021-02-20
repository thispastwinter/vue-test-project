<template>
  <div>
    <Typography class="mb-8" variant="h2">{{ currentList.title }}</Typography>
    <TextField
      v-model="toDo"
      class="mx-24"
      placeholder="Add a To-do"
      :on-enter="createToDo"
    />
    <ProgressBar :percentage="percentage" class="mx-24 my-4" />
    <Typography v-if="percentage === 100">Congrats! You did it! 🎉</Typography>
    <Typography v-if="percentage < 100">{{
      `${percentage}% complete`
    }}</Typography>
    <div class="mb-8" />
    <div class="container">
      <div>
        <Typography variant="h5" class="mb-2">Lists</Typography>
        <ToDoLists :lists="Object.values(lists)" />
      </div>
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
</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api"
import { Actions, Getters, Mutations } from "@/types"
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
    ProgressBar,
    ToDoLists,
  },
  setup() {
    const toDo = ref<string>("")
    const { currentList, lists } = store.state
    return {
      toDo,
      lists,
      currentList,
    }
  },
  computed: {
    completedToDos() {
      console.log(store.getters[Getters.COMPLETED_TO_DOS])
      return store.getters[Getters.COMPLETED_TO_DOS]
    },
    incompleteToDos() {
      return store.getters[Getters.INCOMPLETE_TO_DOS]
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
