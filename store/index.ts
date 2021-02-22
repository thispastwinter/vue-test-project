import Vuex, { Store } from "vuex"
import { State, ToDo, ToDoList } from "@/types"
import { Actions, Getters, Mutations } from "@/constants"
import UUID, { uuid } from "vue-uuid"
import Vue from "vue"

Vue.use(Vuex, UUID)

function generateUUID() {
  return uuid.v4()
}

function createDefaultList(): { [key: string]: ToDoList } {
  const id = generateUUID()
  return {
    [id]: {
      id,
      title: "To-Do List",
      toDos: [],
    },
  }
}

export const store = new Store<State>({
  state: () => ({
    currentListId: "",
    toDos: {},
    lists: { ...createDefaultList() },
  }),
  mutations: {
    [Mutations.TOGGLE_TODO](_state, toDo: ToDo) {
      toDo.complete = !toDo.complete
    },
    [Mutations.CREATE_TODO](state, toDo: ToDo["title"]) {
      const newToDo = {
        id: generateUUID(),
        title: toDo,
        complete: false,
        toDoListId: state.currentListId,
      }
      state.toDos = { ...state.toDos, [newToDo.id]: newToDo }
      state.lists[state.currentListId] = {
        ...state.lists[state.currentListId],
        toDos: [...state.lists[state.currentListId].toDos, newToDo.id],
      }
      toDo = ""
    },
    [Mutations.CREATE_LIST](state, title: ToDoList["title"]) {
      const newList = {
        title,
        id: generateUUID(),
        toDos: [],
      }
      state.lists = { ...state.lists, [newList.id]: newList }
    },
  },
  getters: {
    [Getters.GET_LISTS](state): ToDoList[] {
      return Object.values(state.lists)
    },
    [Getters.CURRENT_LIST_TITLE](state): ToDoList["title"] {
      return state.lists[state.currentListId].title
    },
    [Getters.COMPLETED_TO_DOS](state): ToDo[] {
      return Object.values(state.toDos).filter(
        (toDo) => state.currentListId === toDo.toDoListId && toDo.complete,
      )
    },
    [Getters.INCOMPLETE_TO_DOS](state): ToDo[] {
      return Object.values(state.toDos).filter(
        (toDo) => state.currentListId === toDo.toDoListId && !toDo.complete,
      )
    },
    [Getters.PERCENTAGE_COMPLETE](state, getters): number {
      const totalToDos = Object.values(state.lists[state.currentListId].toDos)
        .length
      const percentageComplete =
        getters[Getters.COMPLETED_TO_DOS].length / totalToDos
      return parseInt((percentageComplete * 100).toFixed(0)) || 0
    },
  },
  actions: {
    [Actions.SET_DEFAULT_LIST](store) {
      store.state.currentListId = Object.values(store.state.lists)[0].id
    },
    [Actions.SET_CURRENT_LIST](store, id: ToDoList["id"]) {
      store.state.currentListId = id
    },
  },
})
