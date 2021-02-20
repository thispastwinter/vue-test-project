import ToDoList from "./ToDoList"

interface ToDo {
  id: string
  title: string
  complete: boolean
  toDoList: ToDoList["id"]
}

export default ToDo
