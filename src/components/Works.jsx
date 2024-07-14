import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/all";
import SplitType from "split-type";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
gsap.registerPlugin(ScrollTrigger)

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-white text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const Work_container = useRef(null)
  const text = new SplitType('.Content_work')

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        start: '45% 80%',
        end: '60% center',
        // scrub: 2,
        // toggleActions: 'play complete play complete',
        markers: false,
      }
    })
    tl
      .from('.Sub_title', {
        y: '-200%',
      })
      .from('.Content_work', {
        opacity: 0,
        y: '-100%'
      })
      .from('.Card_content', {
        scale: 0,
        opacity: 1
      })
      .to('.Sub_title', {
        y: 0,
        duration: 2,
        ease: 'power.inOut'
      }, 0.01)
      .to('.Content_work', {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power4.inOut'
      }, 0.05)
      .to('.Card_content', {
        scale: 1,
        opacity: 1,
      })
  })
  return (
    <div ref={Work_container} className="flex flex-col justify-center items-center content-center pt-24 container">
      <motion.div variants={textVariant()} className="flex container_title">
        <p className={`${styles.sectionSubText} Sub_title font-poppins`}>What I Have Done</p>
        <h2 className={`${styles.sectionHeadText} Sub_title border-l-4 font-unbounded`}> Projects.</h2>
      </motion.div>

      <div className="Container_content">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 mx-10 text-white lg:text-[17px] text-[14px] max-w-6xl lg:leading-[30px] Content_work font-comfortaa'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className='mt-20 mx-10 flex flex-wrap gap-7 Card_content'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "works");