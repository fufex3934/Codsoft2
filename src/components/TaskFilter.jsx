import React from "react";

export default function TaskFilter({ setFilter }) {
  return (
    <div className="mb-4 flex justify-center space-x-4">
      <button 
      onClick={()=>setFilter("All")}
      className="bg-blue-500 text-white p-2 rounded-md">All</button>
      <button
        className="bg-green-500 text-white p-2 rounded-md"
        onClick={() => setFilter("Completed")}
      >
        Completed
      </button>
      <button
      className="bg-yellow-500 text-white p-2 rounded-md"
      onClick={()=>setFilter("Pending")}
      >
        Pending
      </button>
    </div>
  );
}
