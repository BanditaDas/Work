import React from 'react'
import Button from './Button'

function Product({val, mover ,count}) {
  return (
    <div className='w-full py-20 h-[23rem] text-white max-lg:h-auto max-lg:py-[5vh] max-md:py-[4vh]'>
        <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between max-lg:flex-col max-lg:items-start max-lg:px-[4vw] max-md:px-[5vw] max-lg:gap-[3vh] max-md:gap-[2vh]'>
            <h1 className='text-5xl font-semibold max-lg:text-[6vw] max-md:text-[8vw]'>{val.title}</h1>
            <div className="dets w-1/3 max-lg:w-[70vw] max-md:w-full">
                <p className='mb-10 text-lg max-lg:mb-[4vh] max-md:mb-[3vh] max-lg:text-[2.5vw] max-md:text-[4vw]'>{val.desciption}</p>
                <div className="flex items-center gap-5 max-lg:gap-[3vw] max-md:gap-[4vw] max-md:flex-wrap">
                    {val.live && <Button title = "Live Website" />}
                    {val.case && <Button title = "Case Study" />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product
