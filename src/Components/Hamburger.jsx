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
      { opacity: 0, delay: 1 },
      { opacity: 1, duration: 1 },
      ">"
    )
  }, [])

  return (
    <div className="w-full h-screen fixed top-0 left-0 z-40 flex flex-col justify-end items-end">
      {/* Main Container */}
      <div
        ref={menuRef}
        className="w-full h-[90vh] flex flex-col md:flex-row bg-white"
      >
        {/* Left Section */}
        <div className="w-full md:w-[35vw] p-6 sm:p-8 h-full flex flex-col gap-6 sm:gap-10 pb-10 sm:pb-16 justify-end items-start md:items-end border-b md:border-b-0 md:border-r border-[#d9d9d9]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl textAppear w-full text-start">
            ABOUT THIS PROJECT
          </h1>
          <p className="text-sm sm:text-base textAppear text-gray-600 leading-relaxed">
            FORK & FLAMES IS A CREATIVE PLAYGROUND I BUILT USING REACT AND GSAP.
            A MOTION-RICH FOOD EXPERIENCE CRAFTED TO SURPRISE AND DELIGHT.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[65vw] flex flex-col h-full overflow-y-auto">
          <div className="flex flex-col">
            {/* Menu Item */}
            <div className="flex items-center border-b p-6 sm:p-12 md:p-16 border-[#d9d9d9] gap-4">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] textAppear text-[#6B564A] leading-none tracking-tight">
                HOME
              </h1>
            </div>

            {/* Menu Item */}
            <div className="flex items-center p-6 sm:p-12 md:p-16 gap-4">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] textAppear text-[#6B564A] leading-none tracking-tight">
                CONTACT
              </h1>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row p-6 sm:p-12 md:p-16 gap-4 sm:gap-0 justify-between items-start sm:items-center">
              <a
                href="mailto:amxnkamboj@gmail.com"
                className="text-base sm:text-lg textAppear text-[#737373]"
              >
                CONTACT ME
              </a>
              <a
                href="mailto:H2009210@GMAIL.COM"
                className="text-base sm:text-lg text-[#737373] hover:text-gray-600 transition-colors"
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
