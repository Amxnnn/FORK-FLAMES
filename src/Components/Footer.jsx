/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-between  py-4 h-[40vh]" >
      <div className="w-full text-[#737373] px-8 flex justify-between" >
        <p>ALL RIGHT RESERVED</p>
        <p>AMAN KAMNOJ</p>
        <p>@2025</p>

      </div>
      <div className=" vtext overflow-hidden whitespace-nowrap flex " >
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:8}}
          className="lg:text-[12rem] md:text-[10rem] text-[7rem]  capitalize tracking-wider w-full flex justify-center items-center text-[#6B564A]" >
          FORK & FLAMES @2025 FORK & FLAMES @2025 FORK & FLAMES
        </motion.h1>
        </div>
    </div>
  )
}

export default Footer
