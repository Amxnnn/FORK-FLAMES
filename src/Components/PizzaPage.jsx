import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger,SplitText);

const PizzaPage = () => {
    const textRef = useRef(null);

  useGSAP(
    () => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: '#vertical-text-container',
          start: 'top top',
          end: '+=100%', // End after scrolling 100% of the container height
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          pinSpacing: true
        },
      });

      tl1.to('#scrolling-div', {
        x: '-51%',
      });
      // tl1.set(['#img1', '#img2', '#img3', '#img4'], { scale: 1.5 });

      tl1.fromTo('#img1', {
        scale: 1.5,
      },{
        scale:1
      },"<")
      tl1.fromTo('#img2', {
        scale: 1.5,
        duration: 1,
      },{
        scale:1
      },"<")
      tl1.fromTo('#img3', {
        scale: 1.5,
        duration: 1,
      },{
        scale:1
      },"<")
      tl1.fromTo('#img4', {
        scale: 1.5,
        duration: 1,
      },{
        scale:1
      },"<")

      //text
    const split = new SplitText(textRef.current, { type: 'chars' });
    const chars = split.chars;

    const flameColors = ['#ff4500', '#ff4500', '#ff4500', '#ff4500'];
    chars.forEach((char, i) => {
      const color = flameColors[i % flameColors.length];

      tl1.to(char, {
          color,
          duration: 0.2,
          ease: 'power1.inOut'
        }, i * 0.1); // Staggering the start time of each letter
      });
      // tl1.to("#flame-text",{
      // color: "#ff4500",
      //   duration: 1 
      //      })
    tl1.to(chars, {
      color: '#bfbfbf',
      duration: 0.3,
      stagger: 0.05
    });


      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: '#img-container',
          start: 'top bottom',
          end: 'top top',
          scrub: 1.5,

        },
      });
      tl2.fromTo('img', {
        scale: 1.2,
        duration: 1,
      },{
        scale:1
      })

      gsap.from("#text",{
        opacity:0,
        delay:1,
        scrollTrigger: {
          trigger: '#img-container',
          start: 'top bottom',
          end: 'top top',
        },
      })
      
      // Cleanup function to prevent conflicts
      return () => {
        tl1.kill();
        tl2.kill();
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.vars.trigger === '#vertical-text-container' || 
              trigger.vars.trigger === '#img-container') {
            trigger.kill();
          }
        });
      }

    },

    [],
  );
  return (
    <section id='container' className="h-[200vh]">
        <div id="vertical-text-container" className="relative w-full h-screen overflow-hidden flex justify-center items-center">
            <h1 id="scrolling-div" className="absolute font-manrope left-5 flex whitespace-nowrap">
                <div className='h-screen py-4 w-[100vw] flex justify-between items-center' >
                    <div id='img-container' className=' overflow-hidden h-full w-[60vw]' ><img className='h-full w-[60vw] object-cover' src='/images/Pizza.jpeg' alt="Pizza"></img></div>
                    <div  className='text-4xl overflow-hidden flex justify-center  items-center w-[40vw] text-[#737373]' >
                        <h1>TOO HOT TO HANDLE? <span id='text' className='text-red-400' >NAH.</span></h1>
                    </div>
                </div>
                <div id='container2' className='h-screen py-4 w-[100vw] flex justify-between items-center' >
                   <div id='bg' className='relative h-full w-full flex justify-center items-center' >
                        <h1 className='text-[9rem] text-[#bfbfbf]' >ENTER THE <span id='flame-text' ref={textRef} >FLAME</span> </h1>
                        <div  className='absolute top-20 text-[#737373] left-15 flex flex-col justify-start items-start' >
                            <p>FLAME-GRILLED</p>
                            <p>VIBES,ALWAYS</p>
                            <p>HITTIN' RIGHT</p>
                        </div>
                        <div  className='absolute overflow-hidden top-20 h-40 w-60 object-cover right-50' >
                          <img id='img1' src='/images/FriesBowl.png' className='  h-40 w-60 object-cover right-50' alt="Fries Bowl" />
                        </div>
                        <div  className='absolute overflow-hidden top-50 h-30 w-40 object-cover right-1/2' >
                          <img id='img2' src='/images/FriesOnFloor.jpeg' className=' h-full w-full object-cover right-50' alt="Fries on Floor" />
                        </div>
                        <div  className='absolute overflow-hidden bottom-1/6 h-60 w-80 object-cover left-1/5' >
                          <img id='img3' src='/images/Shake.jpeg' className=' h-full w-full object-cover right-50' alt="Shake"/>
                        </div>
                        <div  className='absolute overflow-hidden bottom-5 h-80 w-60 object-cover right-1/5' >
                          <img id='img4' src='/images/LemonJuice.jpeg' className=' h-full w-full object-cover right-50'  alt="Lemon Juice"  />
                        </div>
                        {/* <img src='/images/FriesOnFloor.jpeg' className='absolute top-50 h-30 w-40 object-cover right-1/2' alt="Fries on Floor" />
                        <img src='/images/Shake.jpeg' className='absolute bottom-1/6 h-60 w-80 object-cover left-1/5' alt="Shake" />
                        <img src='/images/LemonJuice.jpeg' className='absolute bottom-5 h-80 w-60 object-cover right-1/5' alt="Lemon Juice" /> */}
                                      
                   </div>
                </div>
                
            </h1>
        </div>
    </section>
  )
}

export default PizzaPage
