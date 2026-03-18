import React from 'react'
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

const WASDController = () => {
    const [pressed, setPressed] = React.useState(null)

    const handlePress = (key) =>{
        setPressed(key)
        setTimeout(() => {
            setPressed(null)
        }, 200);
    }

    const  btnClass = (key) => `absolute flex items-center justify-center w-8 h-8 rounded-full transition-all cursor-pointer select-none
    ${pressed === key ? 'scale-90 text-white' : 'text-gray-400 hoveer:text-white'}`


  return (
    <div className='absolute bottom-6 right-6 z-50'>
        {/* Outer Dark Circle */}
        <div className='relative w-28 h-28 rounded-full bg-gray-900 shadow-2xl flex items-center justify-center'
         style={{background:'radial-gradient(circle,#2d2d2d 0%, #1a1a1a 100%)'}}>

        {/* Up */}
        <button className={btnClass('W')} style={{top:4,left:"50%",transform: 'translateX(-50%'}} onClick={()=>handlePress('W')}>
            <ChevronUp size={16}/>
        </button>

        {/* Down */}
        <button className={btnClass('S')} style={{bottom:4,left:"50%",transform: 'translateX(-50%'}} onClick={()=>handlePress('S')}>
            <ChevronDown size={16}/>
        </button>

        {/* Left */}
        <button className={btnClass('A')} style={{left:4,top:"50%",transform: 'translateY(-50%'}} onClick={()=>handlePress('A')}>
            <ChevronLeft size={16}/>
        </button>

        <button className={btnClass('D')} style={{right:4,top:"50%",transform: 'translateY(-50%'}} onClick={()=>handlePress('D')}>
            <ChevronRight size={16}/>
        </button>

        {/* Inner White Circle */}
        <div className='w-14 h-14 rounded-full bg-white flex flex-col items-center justify-center z-10'>
            <span className='text-gray-500 text-[9px] font-semibold leading-tight'>W</span>
            <div className='flex gap-1 items-center'>
                <span className='text-gray-500 text-[9px] font-semibold'>A</span>
                <div className='flex flex-col items-center'>
                    <span className='text-gray-400 text-[7px] leading-none'>⌘+</span>
                    <span className='text-gray-400 text-[7px] leading-none'>key</span>
                </div>
                <span className='text-gray-500 text-[9px] font-semibold'>D</span>
            </div>
            <span className='text-gray-500 text-[9px] font-semibold leading-tight'>S</span>
        </div>

        </div>
    </div>
  )
}

export default WASDController