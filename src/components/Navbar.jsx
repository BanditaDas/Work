import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between font-[s] max-lg:px-[4vw] max-md:px-[5vw] max-lg:py-[3vh] max-md:flex-wrap max-md:gap-[3vh] max-lg:w-[100vw]'>
        <div className="nleft flex items-center max-md:justify-between max-md:w-full">
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" className="max-lg:w-[15vw] max-md:w-[25vw]" />
        <div className="links flex gap-20 ml-36 max-lg:ml-[8vw] max-lg:gap-[5vw] max-md:ml-0 max-md:gap-[4vw] max-md:w-full max-md:justify-center">
            {["Home", "Work", "About", "News"].map((elem, idx) => <a key={idx} className='text-sm flex items-center gap-1 max-lg:text-[2vw] max-md:text-[3.5vw]' href='#'>
                { idx == 1 &&( <span style= {{boxShadow: "0 0 0.25em #00FF19"}} className='inline-block w-1.5 h-1.5 bg-green-500 rounded-full max-lg:w-[1vw] max-lg:h-[1vw] max-md:w-[2vw] max-md:h-[2vw]'></span>)}
                {elem}
                </a>)}
        </div>
        </div>
        <div className="max-md:w-full max-md:flex max-md:justify-center"><Button/></div>
    </div>
  )
}

export default Navbar
