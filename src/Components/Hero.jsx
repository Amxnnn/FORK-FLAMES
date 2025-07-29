/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react"
import { motion } from "framer-motion"
import gsap from "gsap"

const Hero = () => {
  useGSAP(()=>{
    gsap.from("#shrinkDiv",{
        scale:0.5,
        duration:1
    })
    gsap.from(".vtext",{
        opacity:0,
        delay:1
    })
    const decdiv = gsap.timeline({
      scrollTrigger: {
        trigger: '#herocontainer',
         start: 'bottom 40%',
        end: 'bottom top',
        scrub: true,
      },
    })
    decdiv.to("#shrinkdiv2",{
        scale:0.98
    })
  })
  return (
    <section id="herocontainer" className="flex justify-center items-center h-screen w-full">
    <div id="shrinkdiv2" className="w-full  h-screen overflow-hidden  " >
        <div id="shrinkDiv" className="w-full  h-screen bg-[url('/images/HomePage.jpeg')] bg-cover bg-center rounded-md  ">
            <div className="w-full  h-full flex flex-col justify-between" >
                <div className="w-full flex flex-col  " >
                    <div className=" vtext overflow-hidden whitespace-nowrap flex " >
                        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:8}}
                        className="lg:text-[12rem] md:text-[10rem] text-[7rem]  capitalize tracking-wider w-full flex justify-center items-center text-white" >
                        FORK & FLAMES @2025 FORK & FLAMES @2025 FORK & FLAMES
                        </motion.h1>
                    
                    </div>
                    <div className="w-full vtext flex justify-end p-4  items-center" >
                        <div className="text-2xl text-white flex flex-col items-end leading-6  " >
                            <h2>WHERE TASTE</h2><h2>MEETS FIRE</h2>
                        </div>
                    </div>
                </div>
                <div className="w-full p-4 vtext  text-white text-xl " >
                    <p>IGNITE YOUR APPETITE.</p>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Hero
