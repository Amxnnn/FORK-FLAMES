/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-between py-6 md:py-4 min-h-[30vh] md:h-[40vh]">
      {/* Top Row */}
      <div className="w-full text-[#737373] px-4 sm:px-8 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center text-sm sm:text-base">
        <p>ALL RIGHTS RESERVED</p>
        <p>AMAN KAMNOJ</p>
        <p>@2025</p>
      </div>

      {/* Marquee Text */}
      <div className="vtext overflow-hidden whitespace-nowrap flex">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
          className="text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] xl:text-[12rem] capitalize tracking-wider w-full flex justify-center items-center text-[#6B564A]"
        >
          FORK & FLAMES @2025 FORK & FLAMES @2025 FORK & FLAMES
        </motion.h1>
      </div>
    </div>
  )
}

export default Footer
