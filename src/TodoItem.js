import React from "react";

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <li>
      <span
        onClick={() => {
          onToggle(todo.id);
        }}
        style={{ textDecoration: todo.done ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button
        onClick={() => {
          onRemove(todo.id);
        }}
      >
        delete
      </button>
    </li>
  );
};

export default TodoItem;
