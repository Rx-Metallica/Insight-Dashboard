import { useState } from 'react'
import Sidebar from './components/Sidebar'
import StatusBar from './components/StatusBar'
import { MissionStatus,QuickGoal } from './components/MissionStatus'
import {ModeToggle,Initiate} from './components/ModeToggle'

function App() {
  return (
    <div className='flex h-screen w-screen relative'>
      <Sidebar />
      <div className='flex flex-col flex-1'>
        <StatusBar />
        <MissionStatus />
        <QuickGoal />
        <ModeToggle />
        <Initiate />
      </div>
    </div>

  )
}

export default App