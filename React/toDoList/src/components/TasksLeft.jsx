import React from "react";
import { useTasks } from "../contexts/TasksContext";

function TasksLeft() {
  const { tasks } = useTasks();
  const incompleteCount = tasks.filter(task => !task.isCompleted).length;

  return (
    <h1>
      <p>Tasks left: {incompleteCount}</p>
    </h1>
  );
}

export default TasksLeft;
