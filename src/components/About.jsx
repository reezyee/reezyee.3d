import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import gsap from "gsap";
import SplitType from "split-type";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { StarsCanvas } from "./canvas";
import Cursor from "./Cursor";
import { useGSAP } from "@gsap/react";

import { circle } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>

    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='green-blue-gradient rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center'
      >
        <motion.img animate={{
          rotate: 360,
        }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'loop'
          }}
          src={icon}
          alt='web-development'
          className='w-14 h-14 object-contain'
        />

        <h3 className='text-white font-unbounded text-start font-bold tracking-wider'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {

  const About_container = useRef(null)
  const text = new SplitType('.About_content')

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        start: '20% center',
        end: '30% center',
        // scrub: 2,
        markers: false,
        // toggleActions: 'play complete complete complete'
      }
    });

    tl.from('.Head_about', { x: "-200%" })
      .from('.About_content', { opacity: 0 })
      .from('.circle', { scale: 0, opacity: 0 })
      .from('.Card_service', { opacity: 0, scale: 0 })
      .to('.circle', {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          scrub: 2,
          toggleActions: "play reverse play reverse"
        }
      })
      .to('.Head_about', {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "bounce.out",
      }, 1.5)
      .to('.About_content', {
        opacity: 1,
        duration: 2,
        ease: 'Linear.easeIn'
      }, 2.8)
      .to('.Card_service', {
        opacity: 1,
        scale: 1,
        // rotateY: 360,
        duration: 2,
        ease: 'sine.inOut',
      }, 2.8)

  })
  return (
    <div ref={About_container} className={`bg-gradient-to-b from-[#003b61_60%] to-violet px-8 lg:px-28 pb-10`}>
      <div className={`pb-10 container`}>
        <motion.div variants={textVariant()} className="flex md:flex-col sm:flex-col lg:flex-row flex-col">
          <div className="Head_about flex">
            <motion.div
              className={`text-[60px] w-6 h-5 text-green-500`}>❁</motion.div>
            <h2 className={`${styles.sectionHeadText} text-center pr-3 font-unbounded pt-5`}>About.</h2>
          </div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='ps-4 pt-2 lg:ms-4 text-green-gradient lg:text-[23px] font-comfortaa font-[400px] max-w-fit leading-5 lg:leading-[28px] tracking-[-1px] border-l-2 border-green-500 About_content'
          >
            I'm a Indonesia based,
            passionate about attractive displays with bold colour combinations. Specializing in enhanced frontend experiences with a focus on animated and interactive content. I'm also passionate about fashion modeling,
            with my unique style.
          </motion.p>
        </motion.div>
      </div>
      <div className="absolute left-[-490px] top-[500px]">
        <svg width="848" height="805" viewBox="0 0 848 805" fill="none" className="circle">
          <path d="M847.5 402.5C847.5 624.494 657.917 804.5 424 804.5C190.083 804.5 0.5 624.494 0.5 402.5C0.5 180.506 190.083 0.5 424 0.5C657.917 0.5 847.5 180.506 847.5 402.5Z" stroke="white" />
        </svg>
      </div>
      <div className={`flex flex-wrap justify-around Card_service gap-5`}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <StarsCanvas/>
    </div>
  );
}

export default SectionWrapper(About, "about");