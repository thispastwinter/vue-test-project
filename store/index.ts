import Vuex from "vuex"
import { Mutations, State, Getters, ToDo, Actions } from "@/types"
import Vue from "vue"

function fakeId() {
  return new Date().toString()
}

Vue.use(Vuex)

export const store = new Vuex.Store<State>({
  state: () => ({
    currentList: {
      id: "",
      title: "",
      toDos: [],
    },
    toDos: [],
    lists: [{ title: "To-Do List", id: fakeId(), toDos: [] }],
  }),
  mutations: {
    [Mutations.TOGGLE_TODO](_state, toDo: ToDo) {
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
      state.currentList.toDos.push(newToDo.id)
      toDo = ""
      console.log(state.currentList)
    },
    [Mutations.CREATE_LIST](state, title) {
      const newList = {
        title,
        id: fakeId(),
        toDos: [],
      }
      state.lists.push(newList)
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
        getters[Getters.COMPLETED_TO_DOS].length / totalToDos
      return parseInt((percentageComplete * 100).toFixed(0)) || 0
    },
  },
  actions: {
    [Actions.SET_DEFAULT_LIST](store) {
      store.state.currentList = store.state.lists[0]
    },
  },
})
