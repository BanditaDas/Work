import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

function Work() {

  const [images, setimages] = useState([
    {
      url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top : "70%",
      left: "47%",
      isActive: false,
    },
    {
      url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top : "58%",
      left: "52%",
      isActive: false,
    },
    {
      url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top : "52%",
      left: "54%",
      isActive: false,
    },
    {
      url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top : "60%",
      left: "51%",
      isActive: false,
    },
    {
      url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top : "53%",
      left: "45%",
      isActive: false,
    },
    {
      url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top : "67%",
      left: "52%",
      isActive: false,
    }
  ])


  const { scrollYProgress } = useScroll()

  scrollYProgress.on("change", (data)=>{

    function imagesshow(arr){
      setimages(prev => (
        prev.map((item, idx) => (
          arr.indexOf(idx) === -1 ? (
            {...item, isActive: false}
          ): {...item, isActive: true}
        ))
      ))
    }

    switch(Math.floor(data*100)){
      case 0:
        imagesshow([])
        break;
      case 1:
        imagesshow([0])
        break;
      case 2:
        imagesshow([0, 1])
        break;
      case 3:
        imagesshow([0, 1, 2])
        break;
      case 4:
        imagesshow([0, 1, 2, 3])
        break;
      case 5:
        imagesshow([0, 1, 2, 3, 4])
        break;
      case 6:
        imagesshow([0, 1, 2, 3, 4, 5])
        break; 
    }
  })

  return (
    <div className='w-full '>
        <div className=" relative max-w-screen-xl mx-auto text-center ">
            <h1 className='text-[36vw] leading-none font-semibold tracking-tight select-none mt-10'>work</h1>
            <div className="absolute w-full h-full top-0 ">
              {images.map((elem, idx)=>(elem.isActive && (<img key={idx} className='w-64 rounded-2xl absolute -translate-x-[50%] -translate-y-[50%]' style={{top : elem.top , left: elem.left}} src={elem.url} alt="" />)))}
            </div>
        </div>
        <div className='text-center text-zinc-400 mb-20 text-lg '>Web Design, Webflow Development, Creative Development</div>
    </div>
  )
}

export default Work
