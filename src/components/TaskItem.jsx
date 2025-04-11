import React from "react";

export default function TaskItem({ task, deleteTask, toggleTaskStatus }) {
  return (
    <div>
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
