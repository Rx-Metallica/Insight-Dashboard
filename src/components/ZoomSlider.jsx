import React from 'react'
import { Plus, Minus } from 'lucide-react'

const ZoomSlider = () => {
  const [zoom, setZoom] = React.useState(50)

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 10, 100))
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 10, 0))

  return (
    <div className="absolute left-24 bottom-16 z-50 flex flex-col items-center gap-2">
      
      {/* + Button */}
      <button
        onClick={handleZoomIn}
        className="w-7 h-7 rounded-full bg-gray-700/80 text-white flex items-center justify-center hover:bg-gray-600 transition-all active:scale-95"
      >
        <Plus size={14} />
      </button>

      {/* Slider Track */}
      <div className="relative w-1 h-24 bg-gray-600/80 rounded-full">
        <div
          className="absolute w-4 h-4 bg-white rounded-full shadow-lg left-1/2 transition-all"
          style={{ 
            bottom: `${zoom}%`, 
            transform: 'translateX(-50%) translateY(50%)' 
          }}
        />
      </div>

      {/* - Button */}
      <button
        onClick={handleZoomOut}
        className="w-7 h-7 rounded-full bg-gray-700/80 text-white flex items-center justify-center hover:bg-gray-600 transition-all active:scale-95"
      >
        <Minus size={14} />
      </button>

    </div>
  )
}

export default ZoomSlider