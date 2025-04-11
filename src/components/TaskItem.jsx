import React from "react";

export default function TaskItem({ task, deleteTask, toggleTaskStatus }) {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
      <span
        className={`flex-1 cursor-pointer ${
          task.completed ? "line-through text-gray-500" : ""
        }`}
        onClick={() => toggleTaskStatus(task.id)}
      >
        {task.description}
      </span>
      <button className="ml-4 text-red-500" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
}
