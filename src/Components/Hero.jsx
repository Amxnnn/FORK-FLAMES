/* eslint-disable no-unused-vars */
import { useGSAP } from "@gsap/react"
import { motion } from "framer-motion"
import gsap from "gsap"

const Hero = () => {
  useGSAP(() => {
    gsap.from("#shrinkDiv", {
      scale: 0.5,
      duration: 1,
    })
    gsap.from(".vtext", {
      opacity: 0,
      delay: 1,
    })
    const decdiv = gsap.timeline({
      scrollTrigger: {
        trigger: "#herocontainer",
        start: "bottom 40%",
        end: "bottom top",
        scrub: true,
      },
    })
    decdiv.to("#shrinkdiv2", {
      scale: 0.98,
    })
  })

  return (
    <section
      id="herocontainer"
      className="flex justify-center items-center min-h-screen w-full"
    >
      <div
        id="shrinkdiv2"
        className="w-full min-h-screen overflow-hidden"
      >
        <div
          id="shrinkDiv"
          className="w-full min-h-screen bg-[url('/images/HomePage.jpeg')] bg-cover bg-center rounded-md"
        >
          <div className="w-full h-full flex flex-col justify-between">
            {/* Top Section */}
            <div className="w-full flex flex-col">
              <div className="vtext mt-16 overflow-hidden w-full flex">
                <motion.div
                    className="flex whitespace-nowrap"
                    initial={{ x: "0%" }}
                    animate={{ x: "-50%" }}
                    transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 25, // slower for smoother scroll
                    }}
                >
                    <span className="text-[3rem] sm:text-[3rem] md:text-[5rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] 
                                    capitalize tracking-wider text-white pr-8">
                    FORK & FLAMES @2025 FORK & FLAMES @2025 FORK & FLAMES
                    </span>
                    <span className="text-[3rem] sm:text-[3rem] md:text-[5rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] 
                                    capitalize tracking-wider text-white pr-8">
                    FORK & FLAMES @2025 FORK & FLAMES @2025 FORK & FLAMES
                    </span>
                </motion.div>
              </div>

              <div className="w-full vtext flex justify-end p-4 items-center">
                <div className="text-lg sm:text-xl md:text-2xl text-white flex flex-col items-end leading-6 text-right">
                  <h2>WHERE TASTE</h2>
                  <h2>MEETS FIRE</h2>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="w-full p-4  vtext text-white text-base sm:text-lg md:text-xl">
              <p>IGNITE YOUR APPETITE.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
