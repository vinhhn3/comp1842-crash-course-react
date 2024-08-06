import React from "react";

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      {todo.text}
      <button onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
  );
};

export default TodoItem;
