import React, { useContext } from 'react'
import { taskContext } from './Context/taskContext'

function ErrorMsg() {
    const {task} = useContext(taskContext)
  return (
    <div>
        {task === 0 && <h1 className='text-center capitalize font-bold text-xl p-5'>please enter some task</h1>}
    </div>
  )
}

export default ErrorMsg