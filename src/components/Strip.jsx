import React from 'react'

function Strip({val}) {
  return (
    <div className='w-[19.78vw] h-20 px-10 py-4 border-t-[1.5px] border-b-[1.5px] border-r-[1.5px] border-zinc-600 flex items-center justify-between'>
        <img src={val.url} alt="" />
        <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Strip