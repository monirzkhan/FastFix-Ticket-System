
import './App.css'
import Banner from './Components/Banner/Banner'

import Navbar from './Components/Navbar/Navbar'
import ResolvedTask from './Components/ResolvedTask/ResolvedTask'
import TaskStatus from './Components/TaskStatus/TaskStatus'
import Tickets from './Components/Tickets/Tickets'

function App() {
  

  return (
    <>

    {/* Navbar  */}
    <Navbar></Navbar>

    {/* Banner  */}
    <Banner></Banner>

    {/* Tickets Body  */}
    {/* Customers Tickets  */}
    <div className='md:flex justify-between md:px-32'>
      <div>
        <Tickets></Tickets>
      </div>
     <div>
       <TaskStatus></TaskStatus>
       <ResolvedTask></ResolvedTask>
     </div>
    </div>


    </>
  )
}

export default App
