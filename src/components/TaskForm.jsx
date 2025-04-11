import React, { useState } from "react";

export default function TaskForm({addTask}) {
  const [taskDescription, setTaskDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskDescription.trim()) {
      addTask(taskDescription);
      setTaskDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        className="p-2 w-full rounded-md border border-gray-300"
        placeholder="Enter task description"
      />
      <button
        type="submit"
        className="mt-2 w-full bg-blue-500 text-white p-2 rounded-md"
      >
        Add Task
      </button>
    </form>
  );
}
