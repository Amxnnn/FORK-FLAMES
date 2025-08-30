import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const PizzaPage = () => {
  const textRef = useRef(null);

  useGSAP(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#vertical-text-container",
        start: "top top",
        end: "+=100%",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,
      },
    });

    tl1.to("#scrolling-div", { x: "-51%" });

    tl1.fromTo(
      ["#img1", "#img2", "#img3", "#img4"],
      { scale: 1.5 },
      { scale: 1 },
      "<"
    );

    // Flame text animation
    const split = new SplitText(textRef.current, { type: "chars" });
    const chars = split.chars;
    const flameColors = ["#ff4500", "#ff4500", "#ff4500", "#ff4500"];

    chars.forEach((char, i) => {
      const color = flameColors[i % flameColors.length];
      tl1.to(
        char,
        {
          color,
          duration: 0.2,
          ease: "power1.inOut",
        },
        i * 0.1
      );
    });

    tl1.to(chars, {
      color: "#bfbfbf",
      duration: 0.3,
      stagger: 0.05,
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#img-container",
        start: "top bottom",
        end: "top top",
        scrub: 1.5,
      },
    });
    tl2.fromTo(
      "img",
      { scale: 1.2, duration: 1 },
      { scale: 1 }
    );

    gsap.from("#text", {
      opacity: 0,
      delay: 1,
      scrollTrigger: {
        trigger: "#img-container",
        start: "top bottom",
        end: "top top",
      },
    });

    return () => {
      tl1.kill();
      tl2.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (
          trigger.vars.trigger === "#vertical-text-container" ||
          trigger.vars.trigger === "#img-container"
        ) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section id="container" className="h-[200vh]">
      <div
        id="vertical-text-container"
        className="relative w-full h-screen overflow-hidden flex justify-center items-center"
      >
        <h1
          id="scrolling-div"
          className="absolute font-manrope left-0 flex whitespace-nowrap"
        >
          {/* First screen */}
          <div className="h-screen py-4 w-[100vw] flex flex-col md:flex-row justify-between items-center">
            <div
              id="img-container"
              className="overflow-hidden h-[86vh] md:h-full w-full md:w-[60vw]"
            >
              <img
                className="h-full w-full object-cover"
                src="/images/Pizza.jpeg"
                alt="Pizza"
              />
            </div>
            <div className="text-xl sm:text-2xl md:text-4xl overflow-hidden flex justify-center items-center w-full md:w-[40vw] text-[#737373] mt-6 md:mt-0 px-4 text-center md:text-left">
              <h1>
                TOO HOT TO HANDLE?{" "}
                <span id="text" className="text-red-400">
                  NAH.
                </span>
              </h1>
            </div>
          </div>

          {/* Second screen */}
          <div
            id="container2"
            className="h-screen py-4 w-[100vw] flex flex-col justify-center items-center md:flex-row"
          >
            <div
              id="bg"
              className="relative h-full w-full flex justify-center sm:pb-0 pb-28 items-center text-center"
            >
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] text-[#bfbfbf] font-bold leading-tight">
                ENTER THE{" "}
                <span id="flame-text" ref={textRef}>
                  FLAME
                </span>
              </h1>

              {/* Side text */}
              <div className="absolute top-10 sm:top-16 left-6 sm:left-10 text-sm sm:text-base md:text-lg text-[#737373] flex flex-col items-start">
                <p>FLAME-GRILLED</p>
                <p>VIBES, ALWAYS</p>
                <p>HITTIN' RIGHT</p>
              </div>

              {/* Floating images */}
              <div className="absolute top-20 right-4 sm:right-20 h-28 sm:h-40 w-40 sm:w-60 overflow-hidden">
                <img
                  id="img1"
                  src="/images/FriesBowl.png"
                  className="h-full w-full object-cover"
                  alt="Fries Bowl"
                />
              </div>
              <div className="absolute top-1/5 left-1/5 h-24 sm:h-32 w-32 sm:w-44 overflow-hidden">
                <img
                  id="img2"
                  src="/images/FriesOnFloor.jpeg"
                  className="h-full w-full object-cover"
                  alt="Fries on Floor"
                />
              </div>
              <div className="absolute sm:top-[29rem] top-1/2 left-4 sm:left-1/5 h-40 sm:h-60 w-52 sm:w-80 overflow-hidden">
                <img
                  id="img3"
                  src="/images/Shake.jpeg"
                  className="h-full w-full object-cover"
                  alt="Shake"
                />
              </div>
              <div className="absolute sm:bottom-5 bottom-35 right-4 sm:right-1/5 h-52 sm:h-80 w-40 sm:w-60 overflow-hidden">
                <img
                  id="img4"
                  src="/images/LemonJuice.jpeg"
                  className="h-full w-full object-cover"
                  alt="Lemon Juice"
                />
              </div>
            </div>
          </div>
        </h1>
      </div>
    </section>
  );
};

export default PizzaPage;
