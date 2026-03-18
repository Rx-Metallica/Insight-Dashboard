import React from 'react'

const CameraView = () => {
  return (
    <div className="absolute inset-0 z-0">
      
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        onError={(e) => console.error('Video error:', e)}
        onLoadedData={() => console.log('Video loaded!')}
      >
        <source src="/video/feed.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

    </div>
  )
}

export default CameraView