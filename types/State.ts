import ToDo from "./ToDo"
import ToDoList from "./ToDoList"

interface State {
  currentList: ToDoList
  toDos: ToDo[]
  lists: ToDoList[]
}

export default State
