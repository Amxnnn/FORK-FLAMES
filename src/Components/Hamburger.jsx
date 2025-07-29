/* eslint-disable no-unused-vars */

import PropTypes from "prop-types"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const Hamburger = ({ closeMenu }) => {
  const menuRef = useRef(null)
  useGSAP(() => {
    gsap.fromTo(
      menuRef.current,
      { y: "100%" },
      { y: 0, duration: 0.7, ease: "power3.out" }
    )
    gsap.fromTo(
      ".textAppear",
      { opacity:0 , delay:1 },
      { opacity: 1, duration: 1 },">"
    )
  }, [])
  return (
    <div className="w-full flex h-screen fixed top-0 left-0 z-40 flex-col justify-end items-end ">
      <div ref={menuRef} className="w-full flex h-[90vh] bg-white " >
                <div className="w-[35vw] p-8 h-full flex flex-col gap-10 pb-16 justify-end items-end  border-[#d9d9d9] border-r" >
                <h1 className="text-6xl textAppear w-full text-start" >ABOUT THIS PROJECT</h1>
                <p className="text-sm textAppear  text-gray-600 " >FORK & FLAMES IS A CREATIVE PLAYGROUND I BUILT USING REACT AND GSAP. A MOTION-RICH FOOD EXPERIENCE CRAFTED TO SURPRISE AND DELIGHT.</p>
            </div>
            <div className="w-[65vw] flex flex-col h-full" >
                <div>
                    <div className="flex items-center border-b  p-16 border-[#d9d9d9] gap-4">
                    <h1 className="text-8xl textAppear md:text-9xl lg:text-[12rem]  text-[#6B564A]  leading-none tracking-tight">
                        HOME
                    </h1>
                    </div>

                    <div className="flex items-center  p-16  gap-4">
                        <h1 className="text-8xl textAppear md:text-9xl  lg:text-[12rem]  text-[#6B564A] leading-none tracking-tight">
                            CONTACT
                        </h1>
                    </div>
                    <div className="flex p-16 justify-between items-center">
                        <a  href="mailto:amxnkamboj@gmail.com" className="text-lg textAppear  text-[#737373]">CONTACT ME</a>
                        <a
                        href="mailto:H2009210@GMAIL.COM"
                        className="text-lg  text-[#737373] hover:text-gray-600 transition-colors"
                        >
                        AMXNKAMBOJ@GMAIL.COM
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

Hamburger.propTypes = {
  closeMenu: PropTypes.func.isRequired,
}

export default Hamburger
