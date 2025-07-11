import React, { createContext, useState, useContext } from "react";

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([
    { taskName: "Buy groceries", isCompleted: false },
    { taskName: "Walk the dog", isCompleted: true },
    { taskName: "Read a book", isCompleted: false },
    { taskName: "Finish homework", isCompleted: false },
    { taskName: "Call mom", isCompleted: true },
    { taskName: "Clean the kitchen", isCompleted: false },
    { taskName: "Pay bills", isCompleted: false },
    { taskName: "Exercise for 30 minutes", isCompleted: true }
  ]);

  const toggleTask = (index) => {
    setTasks(prevTasks =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <TasksContext.Provider value={{ tasks, toggleTask }}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}
