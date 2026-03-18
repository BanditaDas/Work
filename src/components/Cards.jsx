import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full max-md:w-[100vw] max-lg:w-[100vw] max-md:px-[2vw] max-lg:px-[2vw]'>
        <div className="max-w-screen-xl mx-auto pt-20 flex gap-1 max-md:flex-col max-md:gap-[2vh] max-lg:flex-col max-lg:gap-[2vh]">
            <Card width = {"basis-1/3"} start={false} para={true} heading = "Up Next: News" h1= "Insights and behind the scenes"/>
            <Card width = {"basis-2/3"} start={true} para={false} heading = "Get In Touch" h1 = "Let's get to it,  together." hover = "true" />
        </div>
        <div className='flex max-w-screen-xl mx-auto gap-10 text-sm pb-5 pt-10 text-zinc-400 max-md:flex-wrap max-md:gap-[4vw] max-md:text-[3.5vw] max-lg:gap-[3vw]'>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
          <p>Impressum</p>
          <p>Terms</p>
        </div>
    </div>
  )
}

export default Cards
