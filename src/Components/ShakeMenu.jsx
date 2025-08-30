import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const ShakeMenu = () => {
  useGSAP(() => {
    const maskTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#shake-container",
        start: "top top",
        end: "bottom center",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,
      },
    })

    maskTl.from("#menu", {
      y: 800,
      duration: 1,
    })

    return () => {
      maskTl.kill()
    }
  })

  return (
    <section
      id="shake-container"
      className="w-full overflow-hidden h-screen bg-[url('/images/ShakeBg.jpeg')] bg-cover bg-center relative flex justify-center items-center z-10"
    >
      <div
        id="menu"
        className="
          bg-white rounded-md flex flex-col items-center 
          h-[60vh] w-[90%] max-w-md sm:max-w-lg md:max-w-xl lg:w-[30vw] 
          p-4 sm:p-6
        "
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
          DIVE INTO THE FLAME
        </h1>
        <p className="mt-2 text-sm sm:text-base md:text-lg text-[#737373] px-2 sm:px-6 text-center">
          Experience bold bites, fire-grilled plates, and a vibe that hits harder
          than your cravings. This isn't just food — it's a whole mood.
        </p>
        <button className="bg-[#736052] flex justify-center items-center px-5 sm:px-6 mt-4 py-2 rounded-2xl text-white text-sm sm:text-base md:text-lg">
          LEARN MORE
        </button>
        <img
          className="h-72 lg:h-full w-full mt-4 object-cover rounded-md"
          src="/images/ChocoShake.jpeg"
          alt="Chocolate Shake"
        />
      </div>
    </section>
  )
}

export default ShakeMenu
