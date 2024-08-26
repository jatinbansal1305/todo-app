import React, { useState } from "react";
const InputContainer = ({ tasks, setTasks }) => {
  const [todoItem, setTodoItem] = useState("");
  const [error, setError] = useState("");

  const isDuplicate = (taskName) => {
    return Object.values(tasks)
      .flat()
      .some((task) => task.id === taskName);
  };

  const validate = () => {
    if (todoItem.trim() === "") {
      return "Todo name cannot be empty.";
    }
    if (isDuplicate(todoItem)) {
      return `Todo with name "${todoItem}" already exists.`;
    }
    return null;
  };
  const clickHandler = () => {
    const Error = validate();

    if (Error) {
      setError(Error);
    } else {
      setTasks((prevTasks) => ({
        ...prevTasks,
        todos: [...prevTasks.todos, { id: todoItem, title: todoItem , priority : 1}],
      }));
      setTodoItem("");
      setError("");
    }
  };

  const onChange = (e) => {
    if (error) {
      setError("");
    }
    setTodoItem(e.target.value);
  };
  return (
    <div>
      <input value={todoItem} onChange={onChange} />
      <button onClick={clickHandler}>create new todo</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default InputContainer;
