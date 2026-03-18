import { RotateCcw } from "lucide-react";
import React from "react";

const EmergencyStop = () => {

    const [triggered, setTriggered] = React.useState(false);

  return (
    <div className="absolute bottom-45 right-10 z-50 flex flex-col items-center">
        {/* {Outer Yellow Ring} */}
        <button onClick={()=>setTriggered(!triggered)}
         className={`w-20 h-20 rounded-full border-8 border-yellow-400 bg-red-600 flex flex-col items-center justify-center shadow-2xl transition-all hover:scale-105 active:scale-95
         ${triggered ? 'ring-4 ring-red-400 ring-offset-2' : ''}`}>
        <RotateCcw size={24} className="text-white" strokeWidth={2.5} />
        </button>

        {/* Emergency Text */}
        <div className="mt-1 flex flex-col items-center">
            <span className="text-sm font-bold text-red-600">EMERGENCY</span>
            <span className="text-xs text-gray-500">STOP</span>
        </div>
    </div>
  )
}

export default EmergencyStop