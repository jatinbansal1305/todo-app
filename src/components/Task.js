import React from "react";

const Task = ({ task, onMoveUp, onMoveDown }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <button
        onClick={() => onMoveDown({taskId: task.id, direction: "down"})}
        style={{ margin: "0 5px" }}
      >
        –
      </button>
      <div style={{display :'flex', flexDirection:'column', border:'1px solid black', alignItems:'center',justifyContent:'center',padding:'10px'}}>
        <p id={task.id}> {task.title}</p>
        <p id={task.id}> priority: {task.priority}</p>
      </div>
      <button
        onClick={() => onMoveUp({taskId: task.id, direction: "up"})}
        style={{ margin: "0 5px" }}
      >
        +
      </button>
    </div>
  );
};

export default Task;

