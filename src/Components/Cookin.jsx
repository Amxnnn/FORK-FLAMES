import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Cookin = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#cookin-container",
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
        pin: true,
        anticipatePin: 1, // consistent with other pages
        pinSpacing: true
      }
    })
    tl.to("#leftText", {
      x: 270
    }).to("#rightText", {
      x: -270
    },"<")
     tl.fromTo("#img5", {
      y:1000
    },{
      y:-1000
    },"<")
     tl.fromTo("#img6", {
      y:1000,
    },{
      y:-1000
    },"<+=0.03")
     tl.fromTo("#img7", {
      y:1000,
    },{
      y:-1000
    },"<+=0.05")
    tl.fromTo("#img8", {
      y:1000,
    },{
      y:-1000
    },"<+=0.05")
    // Cleanup to prevent conflicts
    return () => {
      tl.kill();
    }
  })

  return (
    <div id="cookin-container" className="flex relative items-center justify-between h-screen px-20 bg-white">
      <span id="leftText" className="text-8xl text-[#6B564A]  tracking-wide">WHAT'S</span>
      <span id="rightText" className="text-8xl text-[#6B564A]  tracking-wide">COOKIN'</span>
      <img id='img5' src='/images/Burger.jpeg' className=' h-[14rem]  absolute  w-[22rem] object-cover left-40' alt="Burger"/>
      <img id='img6' src='/images/Nachos.jpeg' className=' h-[18rem]  absolute  w-[17rem] object-cover  right-40' alt="Nachos"/>
      <img id='img7' src='/images/HotDog.jpeg' className=' h-[15rem]  absolute  w-[15rem] object-cover   left-1/4' alt="HotDog"/>
      <img id='img8' src='/images/FriesDrink.jpeg' className=' h-[15rem]  absolute  w-[23rem] object-cover  right-1/4' alt="FriesDrink"/>

    </div>
  )
}

export default Cookin
