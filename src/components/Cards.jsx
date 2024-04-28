import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full '>
        <div className="max-w-screen-xl mx-auto pt-20 flex gap-1">
            <Card width = {"basis-1/3"} start={false} para={true} heading = "Up Next: News" h1= "Insights and behind the scenes"/>
            <Card width = {"basis-2/3"} start={true} para={false} heading = "Get In Touch" h1 = "Let's get to it,  together." hover = "true" />
        </div>
        <div className='flex max-w-screen-xl mx-auto gap-10 text-sm pb-5 pt-10 text-zinc-400 '>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
          <p>Impressum</p>
          <p>Terms</p>
        </div>
    </div>
  )
}

export default Cards