import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Card({width, start, para, heading, h1, hover="false"}) {

  return (
    <motion.div whileHover={{backgroundColor: hover ==="true" && "#7443FF", padding: "25px"}} className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[60vh] flex flex-col justify-between `}>
        <div className="w-full">
            <div className="w-full flex justify-between items-center">
                <h3>{heading}</h3>
                <FaArrowRightLong />
            </div>
            <h1 className='text-3xl font-medium mt-7'>{h1}</h1>
        </div>
        <div className="down w-full ">
            {
                start  && (
                    <>
                    <h1 className='text-[7.5vw] font-semibold tracking-tight leading-none'>Start a Project</h1>
                    <button className='rounded-full py-3 px-7 border-[1px] border-zinc-300 mt-5'>Contact us</button>
                    </>
                )
            }
            {
                para && (
                    <p className='text-sm text-zinc-400'>Explore what drives our team.</p>
                )
            }
            
        </div>
    </motion.div>
  )
}

export default Card