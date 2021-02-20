import ToDo from "./ToDo"
import ToDoList from "./ToDoList"

interface State {
  currentList: ToDoList["id"]
  toDos: { [key: string]: ToDo }
  lists: { [key: string]: ToDoList }
}

export default State
