import React from "react";

import { useTasks } from "../contexts/TasksContext";

export default function ListItem({ taskName, isCompleted = false, index }) {
  const { toggleTask } = useTasks();

  return (
    <div className={`list-item ${isCompleted ? "task-done" : ""}`}>
    <div className="left-group">
        <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => toggleTask(index)}
        />
        <span>{taskName}</span>
    </div>
    <button>X</button>
    </div>

  );
}
