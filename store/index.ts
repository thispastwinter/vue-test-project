import Vuex from "vuex"
import { Mutations, State, Getters } from "@/types"

function fakeId() {
  return new Date().toString()
}

export const store = new Vuex.Store<State>({
  state: () => ({
    toDos: [],
    lists: [],
  }),
  mutations: {
    [Mutations.TOGGLE_TODO](_state, toDo) {
      toDo.complete = !toDo.complete
    },
    [Mutations.CREATE_TODO](state, toDo) {
      const newToDo = {
        id: fakeId(),
        title: toDo,
        complete: false,
        toDoList: undefined,
      }
      state.toDos.push(newToDo)
      toDo = ""
    },
  },
  getters: {
    [Getters.COMPLETED_TO_DOS](state) {
      return state.toDos.filter((toDo) => toDo.complete)
    },
    [Getters.INCOMPLETE_TO_DOS](state) {
      return state.toDos.filter((toDo) => !toDo.complete)
    },
    [Getters.PERCENTAGE_COMPLETE](state, getters) {
      const totalToDos = state.toDos.length
      const percentageComplete =
        totalToDos / getters[Getters.COMPLETED_TO_DOS].length
      return percentageComplete * 100 || 0
    },
  },
})
