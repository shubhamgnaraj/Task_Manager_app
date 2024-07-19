import React, { useContext } from 'react'
import { taskContext } from './Context/taskContext'
import TaskItem from './TaskItem'

function TaskItemlist() {
    const {tasks} = useContext(taskContext)
    console.log(tasks)
  return (
    <>
        {tasks.map((task) => <TaskItem key={task.id} task={task}/>)}
    </>
  )
}

export default TaskItemlist