
import './App.css'
import TaskItemProvider from './components/Context/taskContext'
import ErrorMsg from './components/ErrorMsg'
import Task from './components/Task'
import TaskItemlist from './components/TaskItemlist'

function App() {

  return (
    <TaskItemProvider>
    <div className=' w-full h-screen bg-black flex items-center justify-center text-white '>
      <div className='p-4 border-white border rounded-lg w-[50%]'  >
        <Task />
        {/* <ErrorMsg /> */}
        <TaskItemlist />
      </div>
    </div>
    </TaskItemProvider>
  )
}

export default App
