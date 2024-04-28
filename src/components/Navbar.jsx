import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto py-6 flex items-center justify-between font-[s]'>
        <div className="nleft flex items-center">
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className="links flex gap-20 ml-36">
            {["Home", "Work", "About", "News"].map((elem, idx) => <a key={idx} className='text-sm flex items-center gap-1' href='#'>
                { idx == 1 &&( <span style= {{boxShadow: "0 0 0.25em #00FF19"}} className='inline-block w-1.5 h-1.5 bg-green-500 rounded-full '></span>)}
                {elem}
                </a>)}
        </div>
        </div>
        <Button/>
    </div>
  )
}

export default Navbar