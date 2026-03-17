import { Battery, Signal } from "lucide-react";
import React from 'react'

const StatusBar = () => {
  return (
    <div className='absolute top-0 left-1/2 -translate-x-1/2 bg-gray-800 text-white flex items-center justify-center gap-2 md:gap-4 lg:gap-6 w-auto px-4 md:px-6 py-5 z-50 rounded-b-lg text-xs md:text-sm whitespace-nowrap'>
        
        {/* Battery */}
        <div className="flex items-center gap-1">
            <span>100%</span>
            <Battery size={14} className="text-green-400" />
        </div>

        {/* Divider */}
        <span className="text-gray-600">|</span>

        {/* Signal */}
        <div className="flex items-center gap-1">
            <Signal size={14} className="text-green-400" />
            <span>Strong</span>
        </div>

        {/* Divider */}
        <span className="text-gray-600">|</span>

        {/* Failsafe */}
        <div className="flex items-center gap-1">
            <span className="text-gray-400">Failsafe</span>
            <span className="text-green-400 font-semibold">Okay</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
        </div>

        {/* Divider */}
        <span className="text-gray-600">|</span>

        {/* System */}
        <div className="flex items-center gap-1">
            <span className="text-gray-400">System</span>
            <span className="text-green-400 font-semibold">Okay</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
        </div>

    </div>
  )
}

export default StatusBar