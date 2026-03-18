import { motion } from 'framer-motion'
import React from 'react'

function Marque({imagurl, direction}) {
  return (
    <motion.div className='flex w-full overflow-hidden'>
        <motion.div 
        initial = {{x: direction === "left" ? "0" : "-100%"}}
         animate={{x: direction === "left" ? "-100%" : "0"}} 
         transition={{ease: "linear", duration: 20, repeat: Infinity}} 
          className="flex flex-shrink-0 gap-[8vw] py-10 pr-20 max-lg:gap-[10vw] max-lg:py-[3vh] max-lg:pr-[10vw] max-md:gap-[15vw] max-md:py-[2vh] max-md:pr-[15vw]">
          {imagurl.map((url, idx) => <img key={idx} src={url} className='max-lg:w-[15vw] max-md:w-[25vw]' />)}
        </motion.div>
        <motion.div 
        initial = {{x: direction === "left" ? "0" : "-100%"}}
         animate={{x: direction === "left" ? "-100%" : "0"}}
          transition={{ease: "linear", duration: 20, repeat: Infinity}}  className="flex flex-shrink-0 gap-[8vw] py-10 pr-20 max-lg:gap-[10vw] max-lg:py-[3vh] max-lg:pr-[10vw] max-md:gap-[15vw] max-md:py-[2vh] max-md:pr-[15vw]">
            {imagurl.map((url, idx) => <img key={idx} src={url} className='max-lg:w-[15vw] max-md:w-[25vw]' />)}
        </motion.div>
    </motion.div>
  )
}

export default Marque
