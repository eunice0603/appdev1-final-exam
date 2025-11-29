import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../features/todos/todosSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const toggleComplete = () => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li className="todo-item"> 
      
      <span 
        className={`todo ${todo.completed ? "completed" : ""}`}
      >
        {todo.title}
      </span>

      <button 
        onClick={toggleComplete}
        className={`check-btn ${todo.completed ? "active" : ""}`}
      >
        <i className="fas fa-check"></i> 
      </button>

      <button 
        onClick={handleDelete}
        className={`delete-btn`}
      >
        <i className="fas fa-trash"></i> 
      </button>

    </li>
  );
}

export default TodoItem;