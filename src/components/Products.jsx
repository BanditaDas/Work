import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

function Products() {

    var products = [
        {
            title: "Arqitel",
            desciption: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live: true,
            case: false,
        },
        {
            title: "Cula",
            desciption: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            live: true,
            case: false,
        },
        {
            title: "Layout Land",
            desciption: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
            live: true,
            case: false,
        },
        {
            title: "TTR",
            desciption: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
            live: true,
            case: false,
        },
        {
            title: "Maniv",
            desciption: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
            live: true,
            case: false,
        },
        {
            title: "YIR 2022",
            desciption: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
            live: true,
            case: false,
        },
        {
            title: "Rainfall",
            desciption: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
            live: true,
            case: true,
        },
        {
            title: "Jungle",
            desciption: "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
            live: true,
            case: false,
        },
        {
            title: "Silvr",
            desciption: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
            live: true,
            case: true,
        },
        {
            title: "Remind",
            desciption: "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
            live: true,
            case: true,
        },
        {
            title: "Summon",
            desciption: "We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.",
            live: true,
            case: true,
        },
        {
            title: "Like Magic",
            desciption: "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
            live: true,
            case: true,
        },
        {
            title: "RocketChat",
            desciption: "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.",
            live: true,
            case: false,
        },
        {
            title: "YIR 2021",
            desciption: "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",
            live: true,
            case: false,
        },
        {
            title: "Weglot",
            desciption: "We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.",
            live: true,
            case: false,
        },
        {
            title: "Candid Health",
            desciption: "A complete redesign of a health-startup website, followed by cutting edge development.",
            live: true,
            case: false,
        },
        {
            title: "Showcase",
            desciption: "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
            live: true,
            case: false,
        },

    ]

    const [pos, setpos] = useState(0)

    const mover = (val)=>{
        setpos(val*23)
    }

  return(
    <div className='mt-32 relative'>
        {products.map((val, idx)=> <Product key={idx} val = {val} mover = {mover} count = {idx} />)}

        <div className="absolute top-0 w-full h-full pointer-events-none">
            <motion.div initial= {{y: pos, x: "-50%"}}
            animate={{y :pos +`rem`}}
            transition={{ease :[0.76, 0, 0.24, 1], duration: .5}}
            className="window absolute w-[32rem] h-[23rem] bg-White left-[45%] overflow-hidden rounded-2xl">
                <motion.div animate={{y: -pos+ `rem`}} transition={{ease :[0.76, 0, 0.24, 1], duration: .6}} className=" w-full h-full bg-sky-800 ">
                    <video autoPlay={true}muted loop src="./vid/1.webm"></video>
                </motion.div>
                <motion.div animate={{y: -pos+ `rem`}} transition={{ease :[0.76, 0, 0.24, 1], duration: .6}} className=" w-full h-full bg-sky-600 ">
                <video autoPlay={true}muted loop src="./vid/2.mp4"></video>
                </motion.div>
                <motion.div animate={{y: -pos+ `rem`}} transition={{ease :[0.76, 0, 0.24, 1], duration: .6}} className=" w-full h-full bg-sky-400 ">
                    <video autoPlay={true}muted loop src="./vid/3.mp4"></video>
                </motion.div>
                <motion.div animate={{y: -pos+ `rem`}} transition={{ease :[0.76, 0, 0.24, 1], duration: .6}} className=" w-full h-full bg-sky-200 ">
                    <video autoPlay={true}muted loop src="./vid/4.webm"></video>
                </motion.div>
                <motion.div animate={{y: -pos+ `rem`}} transition={{ease :[0.76, 0, 0.24, 1], duration: .6}} className=" w-full h-full bg-sky-100 ">
                    <video autoPlay={true}muted loop src="./vid/5.mp4"></video>
                </motion.div>
                <motion.div animate={{y: -pos+ `rem`}} transition={{ease :[0.76, 0, 0.24, 1], duration: .6}} className=" w-full h-full bg-sky-100 ">
                    <video autoPlay={true}muted loop src="./vid/6.webm"></video>
                </motion.div>
                <motion.div animate={{y: -pos+ `rem`}} transition={{ease :[0.76, 0, 0.24, 1], duration: .6}} className=" w-full h-full bg-sky-100 ">
                    <video autoPlay={true}muted loop src="./vid/7.webm"></video>
                </motion.div>
                <motion.div animate={{y: -pos+ `rem`}} transition={{ease :[0.76, 0, 0.24, 1], duration: .6}} className=" w-full h-full bg-sky-100 ">
                    <video autoPlay={true}muted loop src="./vid/8.webm"></video>
                </motion.div>
                <motion.div animate={{y: -pos+ `rem`}} transition={{ease :[0.76, 0, 0.24, 1], duration: .5}} className=" w-full h-full bg-sky-100 ">
                    <video autoPlay={true}muted loop src="./vid/10.webm"></video>
                </motion.div>
                <motion.div animate={{y: -pos+ `rem`}} transition={{ease :[0.76, 0, 0.24, 1], duration: .5}} className=" w-full h-full bg-sky-100 ">
                    <video autoPlay={true}muted loop src="./vid/11.webm"></video>
                </motion.div>
                <motion.div animate={{y: -pos+ `rem`}} transition={{ease :[0.76, 0, 0.24, 1], duration: .5}} className=" w-full h-full bg-sky-100 ">
                <video autoPlay={true}muted loop src="./vid/12.webm"></video>
                </motion.div>
                <motion.div animate={{y: -pos+ `rem`}} transition={{ease :[0.76, 0, 0.24, 1], duration: .5}} className=" w-full h-full bg-sky-100 ">
                    <video autoPlay={true}muted loop src="./vid/13.webm"></video>
                </motion.div>
                <motion.div animate={{y: -pos+ `rem`}} transition={{ease :[0.76, 0, 0.24, 1], duration: .5}} className=" w-full h-full bg-sky-100 ">
                    <video autoPlay={true}muted loop src="./vid/14.webm"></video>
                </motion.div>
                <motion.div animate={{y: -pos+ `rem`}} transition={{ease :[0.76, 0, 0.24, 1], duration: .5}} className=" w-full h-full bg-sky-100 ">
                    <video autoPlay={true}muted loop src="./vid/6.webm"></video>
                </motion.div>
                <motion.div animate={{y: -pos+ `rem`}} transition={{ease :[0.76, 0, 0.24, 1], duration: .5}} className=" w-full h-full bg-sky-100 ">
                    <video autoPlay={true}muted loop src="./vid/16.webm"></video>
                </motion.div>
                <motion.div animate={{y: -pos+ `rem`}} transition={{ease :[0.76, 0, 0.24, 1], duration: .5}} className=" w-full h-full bg-sky-100 ">
                    <video autoPlay={true}muted loop src="./vid/17.webm"></video>
                </motion.div>
                <motion.div animate={{y: -pos+ `rem`}} transition={{ease :[0.76, 0, 0.24, 1], duration: .5}} className=" w-full h-full bg-sky-100 ">
                    <video autoPlay={true}muted loop src="./vid/18.mp4"></video>
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default Products