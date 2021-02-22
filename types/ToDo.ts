import ToDoList from "./ToDoList"

interface ToDo {
  id: string
  title: string
  complete: boolean
  toDoListId: ToDoList["id"]
}

export default ToDo
