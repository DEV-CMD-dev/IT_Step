import React from "react";
import { TasksProvider, useTasks } from "./contexts/TasksContext";
import "./App.css";
import ListItem from "./components/ListItem";
import TasksLeft from "./components/TasksLeft";


function AppContent() {
  const { tasks } = useTasks();

  return (
    <>
      <TasksLeft />
      {tasks.map((task, index) => (
        <ListItem key={index} index={index} {...task} />
      ))}
    </>
  );
}

function App() {
  return (
    <TasksProvider>
      <AppContent />
    </TasksProvider>
  );
}

export default App;
