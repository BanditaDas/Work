import React from 'react'
import { FiCornerDownRight } from "react-icons/fi";

function Button({title = "Start a Project"}) {
  return (
    <div className='w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between max-lg:w-[25vw] max-lg:px-[3vw] max-lg:py-[1vh] max-md:w-[45vw] max-md:px-[4vw] max-md:py-[1.5vh]'>
        <span className='text-sm max-lg:text-[2vw] max-md:text-[3.5vw]'>{title}</span>
        <FiCornerDownRight className="max-lg:text-[2.5vw] max-md:text-[4vw]"/>
    </div>
  )
}

export default Button
