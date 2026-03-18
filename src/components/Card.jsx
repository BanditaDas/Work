import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Card({width, start, para, heading, h1, hover="false"}) {

  return (
    <motion.div whileHover={{backgroundColor: hover ==="true" && "#7443FF", padding: "25px"}} className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[60vh] flex flex-col justify-between max-lg:w-full max-lg:min-h-[40vh] max-lg:p-[4vw] max-md:p-[5vw]`}>
        <div className="w-full">
            <div className="w-full flex justify-between items-center max-lg:text-[2.5vw] max-md:text-[4vw]">
                <h3>{heading}</h3>
                <FaArrowRightLong />
            </div>
            <h1 className='text-3xl font-medium mt-7 max-lg:text-[4vw] max-md:text-[6vw] max-lg:mt-[3vh]'>{h1}</h1>
        </div>
        <div className="down w-full max-lg:mt-[5vh]">
            {
                start  && (
                    <>
                    <h1 className='text-[7.5vw] font-semibold tracking-tight leading-none max-lg:text-[10vw] max-md:text-[12vw]'>Start a Project</h1>
                    <button className='rounded-full py-3 px-7 border-[1px] border-zinc-300 mt-5 max-lg:py-[2vh] max-lg:px-[4vw] max-md:py-[1.5vh] max-md:px-[6vw] max-md:text-[3.5vw]'>Contact us</button>
                    </>
                )
            }
            {
                para && (
                    <p className='text-sm text-zinc-400 max-lg:text-[2vw] max-md:text-[3.5vw]'>Explore what drives our team.</p>
                )
            }
            
        </div>
    </motion.div>
  )
}

export default Card
