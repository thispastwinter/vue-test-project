import { reactive } from "@nuxtjs/composition-api"
import { ToDo } from "~/types"
import { fakePromise } from "~/utils"

interface State {
  toDos: ToDo[]
  loading: boolean
}

export default function useToDos() {
  const toDoState = reactive<State>({
    toDos: [],
    loading: true,
  })

  function getToDos() {
    const data = [
      {
        title: "Todo A",
        project: "Project A",
        complete: false,
      },
      {
        title: "Todo B",
        project: "Project B",
        complete: true,
      },
      {
        title: "Todo C",
        project: "Project C",
        complete: false,
      },
      {
        title: "Todo D",
        project: "Project D",
        complete: false,
      },
    ]
    fakePromise(300, data).then((res) => {
      toDoState.toDos = [...toDoState.toDos, ...res]
      toDoState.loading = false
    })
  }
  getToDos()
  return { toDoState }
}
