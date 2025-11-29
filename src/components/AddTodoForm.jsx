import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todosSlice";

function AddTodoForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    dispatch(addTodo(title));
    setTitle("");
  };

  return (
    <div id="form">
      <form onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          placeholder="Add a task."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="todo-btn" type="submit">
          I Got This!
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;