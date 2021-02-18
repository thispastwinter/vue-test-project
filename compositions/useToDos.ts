import { computed, reactive } from "@nuxtjs/composition-api"
import { ToDo } from "~/types"

interface State {
  toDos: ToDo[]
  toDo: string
}

export default function useToDos() {
  const state = reactive<State>({
    toDos: [],
    toDo: "",
  })

  function toggleToDo(toDo: ToDo) {
    toDo.complete = !toDo.complete
  }

  const completedToDos = computed(() =>
    state.toDos.filter((toDo) => toDo.complete),
  )

  const incompleteToDos = computed(() =>
    state.toDos.filter((toDo) => !toDo.complete),
  )

  const percentageComplete = computed(
    () => completedToDos.value.length / state.toDos.length,
  )

  function onEnterToDo() {
    const { toDo } = state
    if (state.toDo) {
      state.toDos.push({ title: toDo, complete: false })
      state.toDo = ""
    }
  }

  return {
    state,
    completedToDos,
    incompleteToDos,
    onEnterToDo,
    toggleToDo,
    percentageComplete,
  }
}
