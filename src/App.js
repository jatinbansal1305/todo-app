import React, { useState, useEffect } from "react";
import Title from "./components/Title.js";
import InputContainer from "./components/InputContainer.js";
import Sections from "./components/Sections.js";

export default function App() {
  const [tasks, setTasks] = useState({
    todos: [],
    inProgress: [],
    done: [],
  });

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) setTasks(tasks);
    console.log(tasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Title title={"TODO App"} />
      <Sections tasks={tasks} setTasks={setTasks} />
      <InputContainer tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
