import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const Page1 = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
        end: 'top top',
        scrub: true,
      },
    }).from(["#text1", "#text2", "#text3"], {
      y: 200,
      opacity: 0,
      ease: "power2.out",
    });
  });

  
  return (
    <section ref={containerRef} className="w-full  ">
      <div className="w-full  p-4 py-16 pb-24 flex flex-col  " >
        <div className="w-full flex justify-between items-center"  >
            <h1>
                Fire-Crafted Dining Experience
            </h1>
            <h1>
                Bold Flavors. Cozy Vibes.
            </h1>
        </div>
        <div className="w-full overflow-hidden flex flex-col justify-start mt-16 items-end h-full" >
            <div className="w-[70vw] flex text-5xl flex-col text-[#bfbfbf] justify-end items-end text-end">
                <div   className=" text overflow-hidden" > <p id="text1"> SAVOR THE ART OF FLAME-KISSED DINING—</p></div>
                <div className="overflow-hidden"><p  id="text2">FRESH INGREDIENTS, FIERY FLAVORS, AND AN</p></div>
                <div  className="overflow-hidden" ><p id="text3">EXPERIENCE THAT IGNITES THE SENSES.</p></div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Page1
