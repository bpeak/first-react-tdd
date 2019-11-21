import React, { useState, useRef, useCallback } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "learn todo",
      done: true
    },
    {
      id: 2,
      text: "go shop",
      done: true
    }
  ]);

  const nextId = useRef(3);

  const onInsert = useCallback(
    text => {
      // 새 항목 추가 후
      setTodos(
        todos.concat({
          id: nextId.current,
          text,
          done: false
        })
      );
      // nextId 값에 1 더하기
      nextId.current += 1;
    },
    [todos]
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        )
      );
    },
    [todos]
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos]
  );

  return (
    <div>
      <TodoForm onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </div>
  );
};

export default TodoApp;
