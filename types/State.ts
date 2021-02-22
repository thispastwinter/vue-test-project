import ToDo from "./ToDo"
import ToDoList from "./ToDoList"

interface State {
  currentListId: ToDoList["id"]
  toDos: { [key: string]: ToDo }
  lists: { [key: string]: ToDoList }
}

export default State
