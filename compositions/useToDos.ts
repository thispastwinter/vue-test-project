import { computed, reactive } from "@nuxtjs/composition-api"
import { ToDo } from "~/types"

interface State {
  toDos: ToDo[]
  toDo: string
}

const data = [
  {
    title: "Todo A",
    complete: false,
  },
  {
    title: "Todo B",
    complete: true,
  },
  {
    title: "Todo C",
    complete: false,
  },
  {
    title: "Todo D",
    complete: false,
  },
]

export default function useToDos() {
  const state = reactive<State>({
    toDos: data,
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

  function onEnterToDo() {
    const { toDo } = state
    if (state.toDo) {
      state.toDos.push({ title: toDo, complete: false })
      state.toDo = ""
    }
  }

  return { state, completedToDos, incompleteToDos, onEnterToDo, toggleToDo }
}
