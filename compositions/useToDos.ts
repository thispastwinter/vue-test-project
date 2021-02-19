import { computed, reactive } from "@nuxtjs/composition-api"
import { ToDo, ToDoList } from "@/types"

interface State {
  list: ToDoList
  toDos: ToDo[]
  toDo: string
  lists: ToDoList[]
}

export default function useToDos() {
  const state = reactive<State>({
    list: {
      title: "",
      id: "",
      toDos: [],
    },
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

  function setCurrentList(payload: ToDoList) {
    state.list = payload
  }

  function createList(payload: ToDoList["title"]) {
    const newList: ToDoList = {
      title: payload,
      id: fakeId(),
      toDos: [],
    }
    state.lists.push(newList)
  }

  function createToDo() {
    const { toDo } = state
    if (state.toDo) {
      state.toDos.push({
        id: fakeId(),
        title: toDo,
        complete: false,
        toDoList: state.list,
      })
      state.toDo = ""
    }
  }

  return {
    state,
    setCurrentList,
    createList,
    completedToDos,
    incompleteToDos,
    createToDo,
    toggleToDo,
    percentageComplete,
  }
}
