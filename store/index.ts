import Vuex from "vuex"
import { ToDo, ToDoList } from "~/types"

interface State {
  toDos: ToDo[]
  lists: ToDoList[]
}

function fakeId() {
  return new Date().toString()
}

const TOGGLE_TODO = "TOGGLE_TODO"
const CREATE_TODO = "CREATE_TODO"

export const store = new Vuex.Store<State>({
  state: () => ({
    toDos: [],
    lists: [],
  }),
  mutations: {
    [TOGGLE_TODO](_state, { toDo }) {
      toDo.complete = !toDo.complete
    },
    [CREATE_TODO](state, { title }) {
      const newToDo = {
        id: fakeId(),
        title,
        complete: false,
        toDoList: undefined,
      }
      state.toDos.push(newToDo)
    },
  },
})
