
import { Suspense, useEffect, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import ResolvedTask from './Components/ResolvedTask/ResolvedTask'
import TaskStatus from './Components/TaskStatus/TaskStatus'
import Tickets from './Components/Tickets/Tickets'
import { ToastContainer } from 'react-toastify';
import Footer from './Components/Footer/Footer'







function App() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch('/tickets.json')
      .then(res => res.json())
      .then(data => setTickets(data));
  }, []);
  
  const [progress, setProgress] = useState(0)
  const [resolve, setResolve] = useState(0)

  const [selectTask, setSelectTask] = useState([]);
  const [selectComplete, setSelectComplete] = useState([]);
  const [completeTask, setCompleteTask] = useState([]);

  const removeTaskCard = (completeData) => {
    const filteredData = selectTask.filter(data => data.id !== completeData.id);
    setSelectTask(filteredData);

    const updatedTickets = tickets.filter(data => data.id !== completeData.id);
    setTickets(updatedTickets);

  }


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
      <div className='md:flex justify-between md:px-32  py-4 bg-[#62738220] '>
        <div className='md:w-3/5'>
          <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
            <Tickets
              tickets={tickets}
              setTickets={setTickets}
              selectTask={selectTask}
              setSelectTask={setSelectTask}
              progress={progress}
              setProgress={setProgress}
            >

            </Tickets>
          </Suspense>
        </div>
        {/* Task Status Card  */}
        <div className='md:w-1/4'>
          <TaskStatus
            removeTaskCard={removeTaskCard}
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

      {/* Footer  */}
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
