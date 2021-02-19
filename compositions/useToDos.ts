import { computed, reactive } from "@nuxtjs/composition-api"
import { ToDo, ToDoList } from "@/types"

interface State {
  list: string
  toDos: ToDo[]
  toDo: string
  lists: ToDoList[]
}

export default function useToDos() {
  const state = reactive<State>({
    list: "",
    lists: [],
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

  function fakeId() {
    return new Date().toString()
  }

  function createList() {
    const newList: ToDoList = {
      title: state.list,
      id: fakeId(),
      toDos: [],
    }
    state.lists.push(newList)
  }

  function createToDo() {
    const { toDo } = state
    const newToDo = {
      id: fakeId(),
      title: toDo,
      complete: false,
      toDoList: undefined,
    }
    if (state.toDo) {
      state.toDos.push(newToDo)
      state.toDo = ""
    }
  }

  return {
    state,
    createList,
    completedToDos,
    incompleteToDos,
    createToDo,
    toggleToDo,
    percentageComplete,
  }
}
