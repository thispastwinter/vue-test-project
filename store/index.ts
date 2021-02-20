import Vuex from "vuex"
import { Mutations, State, Getters, ToDo, Actions } from "@/types"
import Vue from "vue"

function fakeId() {
  return new Date().toString()
}

Vue.use(Vuex)

export const store = new Vuex.Store<State>({
  state: () => ({
    currentList: "",
    toDos: {},
    lists: { [fakeId()]: { title: "To-Do List", id: fakeId(), toDos: [] } },
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
        toDoList: state.currentList,
      }
      state.toDos = { ...state.toDos, [newToDo.id]: newToDo }
      toDo = ""
    },
    [Mutations.CREATE_LIST](state, title) {
      const newList = {
        title,
        id: fakeId(),
        toDos: [],
      }
      state.lists = { ...state.lists, [newList.id]: newList }
    },
  },
  getters: {
    [Getters.COMPLETED_TO_DOS](state) {
      return Object.values(state.toDos).filter((toDo) => toDo.complete)
    },
    [Getters.INCOMPLETE_TO_DOS](state) {
      return Object.values(state.toDos).filter((toDo) => !toDo.complete)
    },
    [Getters.PERCENTAGE_COMPLETE](state, getters) {
      const totalToDos = Object.values(state.toDos).length
      const percentageComplete =
        getters[Getters.COMPLETED_TO_DOS].length / totalToDos
      return parseInt((percentageComplete * 100).toFixed(0)) || 0
    },
  },
  actions: {
    [Actions.SET_DEFAULT_LIST](store) {
      store.state.currentList = Object.values(store.state.lists)[0].id
    },
  },
})
