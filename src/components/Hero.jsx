import { useEffect, useRef } from "react";
import { easeInOut, motion } from "framer-motion";
import gsap from 'gsap';
import { Tilt } from "react-tilt";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import SplitType from "split-type"
// import CharacterCanvas from "./canvas/Character";
// import { translate } from "maath/dist/declarations/src/buffer";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const t1 = new SplitType('.split')
  const Hero_container = useRef(null)
  useGSAP(() => {
    gsap.fromTo('.Hero_content', {
      opacity: 0,
      scale: 0,
    }, {
      opacity: 1,
      scale: 1,
      delay: 1.9,
      ease: 'elastic.out',
      duration: 2,
    })
    gsap.from('.split-name', {
      opacity: 0,
      delay: 2,
      y: '-500%',
      ease: 'bounce.inOut',
      duration: 2,
    })
    gsap.from('.split-country', {
      opacity: 0,
      delay: 2,
      y: '500%',
      ease: 'bounce.inOut',
      duration: 2,
    })
    gsap.fromTo('.circle1', {
      opacity: 0,
      scale: 0,
    }, {
      opacity: 1,
      scale: 1,
      delay: 2
    })
  })
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        start: '14% center',
        end: '24% center',
        scrub: 2,
        markers: false,
        toggleActions: 'play reverse play reverse',
      }
    });
    tl
      .to('.split-name', {
        y: '-200%',
        opacity: 0,
        duration: 2
      }, 0.1)
      .to('.split-country', {
        y: '200%',
        opacity: 0,
        duration: 2
      }, 0.1)
      .to('.world', {
        scale: 5,
        opacity: 0,
        duration: 5,
      }, 0.1)
      .to('.Dev_text', {
        x: '-2%',
        duration: 1,
        opacity: 0,
      }, 0.1)
      .to('.Des_text', {
        x: '2%',
        duration: 1,
        opacity: 0,
      }, 0.1)
  })

  return (
    <section ref={Hero_container} className={`relative w-full h-screen mx-auto flex flex-col justify-center bg-[#003b61]`}>
      <div className="absolute top-[-90px] t-[-10px] lg:left-[1070px]">
      <svg viewBox="0 0 444 376" fill="none" className="circle1">
        <path d="M847.5 -26.5C847.5 195.494 657.917 375.5 424 375.5C190.083 375.5 0.5 195.494 0.5 -26.5C0.5 -248.494 190.083 -428.5 424 -428.5C657.917 -428.5 847.5 -248.494 847.5 -26.5Z" stroke="#acacac" />
      </svg>
      </div>
      <div
        className={`lg:leading-[80px] container leading-[25px]`}
      >
        <div className="lg:text-[80px] text-[20px] lg:tracking-[-5px] font-comfortaa split split-name pl-12">Reza Sapitra</div>
        <div className="align-text-bottom lg:text-[110px] text-[36px] flex flex-row lg:tracking-[-10px] tracking-[-4px] font-unbounded justify-center text-green-500 Hero_content">
          <p className="Dev_text split">Developer</p>
          <motion.div animate={{
            rotateY: 360
          }}
            transition={{
              duration: 1,
              delay: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }} className="world">🌏</motion.div>
          <p className="Des_text split">Designer</p>
        </div>
        <div className="lg:text-[80px] text-[20px] lg:tracking-[-5px] font-comfortaa split split-country float-end pr-12">Indonesia</div>
        {/* <CharacterCanvas/> */}
      </div>


      <div className='container absolute xs:bottom-10 bottom-32 w-full flex justify-start pl-10 items-center'>
        {/* <a href='#about'> */}
        <p className="transform -rotate-90 font-poppins">Scroll</p>
        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2'>
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className='w-3 h-3 rounded-full bg-[#318DB2] mb-1'
          />
        </div>
        {/* </a> */}
      </div>
    </section>
  );
};

export default Hero;