import { useState } from 'react'
import Sidebar from './components/Sidebar'
import StatusBar from './components/StatusBar'
import { MissionStatus,QuickGoal } from './components/MissionStatus'
import {ModeToggle,Initiate} from './components/ModeToggle'
import EmergencyStop from './components/EmergencyStop'
import WASDController from './components/WASDController'
import MapView from './components/MapView'
import CameraView from './components/CamearaView'

function App() {
  return (
    <div className='flex h-screen w-screen'>
      <Sidebar />
      <div className='flex flex-col flex-1 relative overflow-hidden'>
         <CameraView />      {/* ← FIRST, z-0 */}
        <StatusBar />
        <MissionStatus />
        <QuickGoal />
        <ModeToggle />
        <Initiate />
        <EmergencyStop />
        <WASDController />
        <MapView/>
      </div>
    </div>

  )
}

export default App