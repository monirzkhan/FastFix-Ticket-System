
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'

import Navbar from './Components/Navbar/Navbar'
import ResolvedTask from './Components/ResolvedTask/ResolvedTask'
import TaskStatus from './Components/TaskStatus/TaskStatus'
import Tickets from './Components/Tickets/Tickets'



const ticketsPromise = fetch('/tickets.json')
  .then(res => (res.json()))
function App() {
  const [progress, setProgress] = useState(0)
  const [selectTask, setSelectStatus] = useState([]);
  

  return (
    <>

      {/* Navbar  */}
      <Navbar></Navbar>

      {/* Banner  */}
      <div className=' '>
        <Banner progress={progress}></Banner>
      </div>


      {/* Tickets Body  */}
      {/* Customers Tickets  */}
      <div className='md:flex justify-between md:px-32 py-4 bg-[#62738220] '>
        <div className='w-3/5'>
          <Suspense fallback='Tickets Loading'>
            <Tickets
              selectTask={selectTask}
              setSelectStatus={setSelectStatus}
              progress={progress}
              setProgress={setProgress}
              ticketsPromise={ticketsPromise} >

            </Tickets>
          </Suspense>
        </div>
        <div className='w-1/4'>
          <TaskStatus
            selectTask={selectTask}
            
          ></TaskStatus>
          <ResolvedTask></ResolvedTask>
        </div>
      </div>


    </>
  )
}

export default App
