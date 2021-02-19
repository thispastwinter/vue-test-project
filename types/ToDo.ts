import ToDoList from "./ToDoList"

interface ToDo {
  id: string
  title: string
  complete: boolean
  toDoList?: {
    title: ToDoList["title"]
    id: ToDoList["id"]
  }
}

export default ToDo
