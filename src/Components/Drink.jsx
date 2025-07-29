import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Drink = () => {

   useGSAP(() => {
      const tline = gsap.timeline({
      scrollTrigger: {
        trigger: '#outercontainer',
         start: 'top 70%',
        end: 'top top',
        scrub: true,

      },
    })
    tline.from(["#text4", "#text5", "#text6","#text7","#text8"], {
      y: 200,
      opacity: 0,
      ease: "power2.out",
    });
    tline.to("#shrinkdiv3",{
        scale:0.98
    })
  });
  return (
    <section id="outercontainer" className="w-full h-[120vh]  ">
      <div id="shrinkdiv3" className="w-full  h-full p-8 overflow-hidden rounded-md bg-center bg-cover bg-[url('/images/Juice.jpeg')]  " >

      <div className="w-full flex justify-between" >
          <div className="flex text-8xl text-white tracking-widest flex-col justify-start items-start" >
              <div   className=" text overflow-hidden" > <h1 id="text4">FORK UP</h1> </div>
              <div   className=" text overflow-hidden" > <h1 id="text5">THE</h1></div>
              <div   className=" text overflow-hidden" > <h1 id="text6">FLAVOR</h1></div>
              <div   className=" text overflow-hidden" > <h1 id="text7">WITH</h1></div>
              <div   className=" text overflow-hidden" > <h1 id="text8">HEAT</h1> </div>  
          </div>
          <div className="flex text-xl text-white tracking-wider flex-col justify-start items-end" >
              <h1>COME FOR THE FOOD,</h1>
              <h1>STAY FOR THE FIRE.</h1>      
          </div>
      </div>
      </div>
    </section>
  )
}

export default Drink
