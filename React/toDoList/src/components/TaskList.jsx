import React from "react";
import { useTasks } from "./TasksContext";

function TaskList() {
  const { tasks, toggleTask } = useTasks();

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <span>{task.name}</span>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
