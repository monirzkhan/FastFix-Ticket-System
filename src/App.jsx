
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'

import Navbar from './Components/Navbar/Navbar'
import ResolvedTask from './Components/ResolvedTask/ResolvedTask'
import TaskStatus from './Components/TaskStatus/TaskStatus'
import Tickets from './Components/Tickets/Tickets'
import { ToastContainer } from 'react-toastify';



const ticketsPromise = fetch('/tickets.json')
  .then(res => (res.json()))
function App() {
  const [progress, setProgress] = useState(0)
  const [resolve, setResolve] = useState(0)

  const [selectTask, setSelectStatus] = useState([]);
  const [selectComplete, setSelectComplete] = useState([]);
  const [completeTask, setCompleteTask] = useState([]);
  console.log(completeTask)


  return (
    <>

      {/* Navbar  */}
      <Navbar></Navbar>

      {/* Banner  */}
      <div className=' '>
        <Banner progress={progress} resolve={resolve}></Banner>
      </div>


      {/* Tickets Body  */}
      {/* Customers Tickets  */}
      <div className='md:flex justify-between md:px-32 py-4 bg-[#62738220] '>
        <div className='w-3/5'>
          <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
            <Tickets
              selectTask={selectTask}
              setSelectStatus={setSelectStatus}
              progress={progress}
              setProgress={setProgress}
              ticketsPromise={ticketsPromise} >

            </Tickets>
          </Suspense>
        </div>
        {/* Task Status Card  */}
        <div className='w-1/4'>
          <TaskStatus
            completeTask={completeTask}
            setCompleteTask={setCompleteTask}
            selectTask={selectTask}
            progress={progress}
            setProgress={setProgress}
            resolve={resolve}
            setResolve={setResolve}
            selectComplete={selectComplete}
            setSelectComplete={setSelectComplete}

          ></TaskStatus>

          {/* Resolve Task Card  */}
          <ResolvedTask
          completeTask={completeTask}
          >

          </ResolvedTask>
        </div>
      </div>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
