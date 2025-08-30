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
        start: "top 90%",
        end: "top top",
        scrub: true,
      },
    }).from(["#text1", "#text2", "#text3"], {
      y: 200,
      opacity: 0,
      ease: "power2.out",
    });
  });

  return (
    <section ref={containerRef} className="w-full">
      <div className="w-full p-4 py-16 pb-24 flex flex-col">
        {/* Top heading section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
            Fire-Crafted Dining Experience
          </h1>
          <h1 className="text-lg sm:text-xl md:text-2xl text-gray-700">
            Bold Flavors. Cozy Vibes.
          </h1>
        </div>

        {/* Animated text section */}
        <div className="w-full overflow-hidden flex flex-col justify-start mt-12 sm:mt-16 items-end h-full">
          <div className="w-full  md:w-[70vw] flex flex-col text-[#bfbfbf] text-right">
            <div className="overflow-hidden">
              <p
                id="text1"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl "
              >
                SAVOR THE ART OF FLAME-KISSED DINING—
              </p>
            </div>
            <div className="overflow-hidden">
              <p
                id="text2"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl "
              >
                FRESH INGREDIENTS, FIERY FLAVORS, AND AN
              </p>
            </div>
            <div className="overflow-hidden">
              <p
                id="text3"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl "
              >
                EXPERIENCE THAT IGNITES THE SENSES.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page1;
