import { useEffect } from "react";
import Task from "./Task";

const Section = ({
    tasks,
  onMoveItem,
  disabledBack,
  disabledNext,
  currentSection,
  setTasks
}) => {
  const MoveHandler = ({taskId, direction}) => {
    console.log(taskId);
  
    const taskCopy = { ...tasks };
    const sectionTasks = taskCopy[currentSection];
    const taskIndex = sectionTasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) return;
    
    const [task] = sectionTasks.splice(taskIndex, 1);
  
    if (direction === "up") {
      task.priority = Math.min(100, task.priority + 1);
    } else if (direction === "down") {
      task.priority = Math.max(1, task.priority - 1);
    }
  
    sectionTasks.push(task);
  
    setTasks(taskCopy);
    
  };

  const sortCurrentTasks=()=>{
    const taskCopy = { ...tasks };
    const sectionTasks = taskCopy[currentSection];
    sectionTasks.sort((a, b) => b.priority - a.priority);
    setTasks(taskCopy);
  }

  useEffect(()=>{
    sortCurrentTasks();
  },[tasks])

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "5px",
        minHeight: "300px",
        minWidth: "200px",
      }}
    >
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        {currentSection}
      </h2>
      {tasks[currentSection].map((task) => (
        <div
          key={task.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "5px",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <button
            onClick={() =>
              onMoveItem({ taskId: task.id, currentSection, value: "prev" })
            }
            disabled={disabledBack}
          >
            prev
          </button>
          <Task
            task={task}
            onMoveUp={MoveHandler}
            onMoveDown={MoveHandler}
          />
          <button
            onClick={() =>
              onMoveItem({ taskId: task.id, currentSection, value: "next" })
            }
            disabled={disabledNext}
          >
            next
          </button>
        </div>
      ))}
    </div>
  );
};

export default Section;
