import React from 'react'
import TaskItem from './TaskItem'
export default function TaskList({tasks,deleteTask,toggleTaskStatus}) {
  return (
    <div className='space-y-2'>
        {
            tasks.map((task)=>(
                <TaskItem
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleTaskStatus={toggleTaskStatus}
                />
            ))
        }
    </div>
  )
}
