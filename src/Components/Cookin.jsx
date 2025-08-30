import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Cookin = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#cookin-container",
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,
      },
    })

    tl.to("#leftText", { x: 270 })
      .to("#rightText", { x: -270 }, "<")
      .fromTo("#img5", { y: 1000 }, { y: -1000 }, "<")
      .fromTo("#img6", { y: 1000 }, { y: -1000 }, "<+=0.03")
      .fromTo("#img7", { y: 1000 }, { y: -1000 }, "<+=0.05")
      .fromTo("#img8", { y: 1000 }, { y: -1000 }, "<+=0.05")

    return () => tl.kill()
  })

  return (
    <div
      id="cookin-container"
      className="
        flex relative items-center justify-between h-screen 
        px-4 sm:px-10 md:px-20 bg-white overflow-hidden
      "
    >
      {/* Left Text */}
      <span
        id="leftText"
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#6B564A] tracking-wide"
      >
        WHAT&apos;S
      </span>

      {/* Right Text */}
      <span
        id="rightText"
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#6B564A] tracking-wide"
      >
        COOKIN&apos;
      </span>

      {/* Floating Images */}
      <img
        id="img5"
        src="/images/Burger.jpeg"
        className="absolute object-cover left-4 sm:left-20 md:left-40 h-32 w-52 sm:h-48 sm:w-72 lg:h-[14rem] lg:w-[22rem] rounded-md"
        alt="Burger"
      />
      <img
        id="img6"
        src="/images/Nachos.jpeg"
        className="absolute object-cover right-4 sm:right-20 md:right-40 h-36 w-40 sm:h-56 sm:w-60 lg:h-[18rem] lg:w-[17rem] rounded-md"
        alt="Nachos"
      />
      <img
        id="img7"
        src="/images/HotDog.jpeg"
        className="absolute object-cover left-1/4 h-28 w-32 sm:h-40 sm:w-48 lg:h-[15rem] lg:w-[15rem] rounded-md"
        alt="HotDog"
      />
      <img
        id="img8"
        src="/images/FriesDrink.jpeg"
        className="absolute object-cover right-1/4 bottom-10 h-28 w-44 sm:h-40 sm:w-60 lg:h-[15rem] lg:w-[23rem] rounded-md"
        alt="Fries & Drink"
      />
    </div>
  )
}

export default Cookin
