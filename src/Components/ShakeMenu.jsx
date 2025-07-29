import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const ShakeMenu = () => {
  useGSAP(()=>{

        const maskTl = gsap.timeline({
            scrollTrigger:{
                trigger:"#shake-container",
                start:'top top',
                end:'bottom center',
                scrub:1.5,
                pin:true,
                anticipatePin: 1,
                pinSpacing: true
            }
        })

        maskTl.from("#menu",{
          y:800,
          duration: 1
        })

        // Cleanup function to prevent conflicts
        return () => {
          maskTl.kill();
        }

    })
  return (
    <section id="shake-container" className="w-full overflow-hidden h-screen bg-[url('/images/ShakeBg.jpeg')] bg-cover bg-center relative flex justify-center items-center z-10">
        <div id="menu" className="h-[70vh] w-[30vw] bg-white rounded-md flex flex-col items-center p-2 pt-4" >
            <h1 className="text-4xl" >DIVE INTO THE FLAME</h1>
            <p className="mt-2 text-[#737373] px-7 text-center" > Experience bold bites, fire-grilled plates, and a vibe that hits harder than your cravings. This isn't just food — it's a whole mood.</p>
            <div className="bg-[#736052] flex  justify-center items-center px-6 mt-4 py-2 rounded-2xl text-white " >LEARN MORE</div>
            <img className="h-full w-full mt-4 object-cover rounded-md" src="/images/ChocoShake.jpeg" ></img> 
        </div>
    </section>
  )
}

export default ShakeMenu
