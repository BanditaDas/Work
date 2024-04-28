import { motion } from 'framer-motion'
import React from 'react'

function Marque({imagurl, direction}) {
  return (
    <motion.div className='flex w-full overflow-hidden'>
        <motion.div 
        initial = {{x: direction === "left" ? "0" : "-100%"}}
         animate={{x: direction === "left" ? "-100%" : "0"}} 
         transition={{ease: "linear", duration: 20, repeat: Infinity}} 
          className="flex flex-shrink-0 gap-[8vw] py-10 pr-20">
          {imagurl.map((url, idx) => <img key={idx} src={url} className='' />)}
        </motion.div>
        <motion.div 
        initial = {{x: direction === "left" ? "0" : "-100%"}}
         animate={{x: direction === "left" ? "-100%" : "0"}}
          transition={{ease: "linear", duration: 20, repeat: Infinity}}  className="flex flex-shrink-0 gap-[8vw] py-10 pr-20">
            {imagurl.map((url, idx) => <img key={idx} src={url} className='' />)}
        </motion.div>
    </motion.div>
  )
}

export default Marque