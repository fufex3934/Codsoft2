import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  //adding task
  const addTask = (taskDescription) => {
    const newTask = {
      id: Date.now(),
      description: taskDescription,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  //deleting task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle task completion status
  const toggleTaskStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  //filter task based on completion status
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") {
      return task.completed;
    }
    if (filter === "Pending") {
      return !task.completed;
    }
    return true;
  });
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-center text-3xl font-bold mb-4">Task Tracker App</h1>
      <TaskForm addTask={addTask}/>
      <TaskFilter />
      <TaskList />
    </div>
  );
}

export default App;
