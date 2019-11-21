import React, { useState } from "react";

const TodoForm = ({ onInsert }) => {
  const [inputState, setInputState] = useState("");
  return (
    <div>
      <input
        value={inputState}
        onChange={e => {
          setInputState(e.target.value);
        }}
        placeholder="type your todo"
      />
      <button
        onClick={() => {
          onInsert(inputState);
          setInputState("");
        }}
      >
        submit
      </button>
    </div>
  );
};

export default TodoForm;
