import ToDo from "./ToDo"

interface ToDoList {
  id: string
  title: string
  toDos: ToDo["id"][]
}

export default ToDoList
