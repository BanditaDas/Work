import React from 'react'

function Strip({val}) {
  return (
    <div className='w-[19.78vw] h-20 px-10 py-4 border-t-[1.5px] border-b-[1.5px] border-r-[1.5px] border-zinc-600 flex items-center justify-between max-lg:w-[33.33vw] max-lg:h-[8vh] max-lg:px-[4vw] max-md:w-[50vw] max-md:h-[10vh] max-md:px-[5vw]'>
        <img src={val.url} alt="" className="max-lg:w-[12vw] max-md:w-[25vw]" />
        <span className='font-semibold max-lg:text-[2.5vw] max-md:text-[4vw]'>{val.number}</span>
    </div>
  )
}

export default Strip
