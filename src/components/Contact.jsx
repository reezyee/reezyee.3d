import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import ScrollTrigger from "gsap/all";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
const SERVICE_ID = "service_oj0xj2y";
const TEMPLATE_ID = "template_g7br4w6";
const PUBLIC_KEY = "t6uwPGgAMARRFGsXU";
gsap.registerPlugin(ScrollTrigger)

const Contact = () => {

  const Contact_container = useRef(null)
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        start: "80% 90%",
        end: '90% 90%',
        // scrub: 2,
        markers: false,
        // toggleActions: 'play reverse play reverse'
      }
    })
    tl.from('.formContainer', {
      x: '-200%'
    })
      .from('.Earth_plane', {
        scale: 0
      })
      .to('.Earth_plane', {
        scale: 1,
      })
      .to('.formContainer', {
        x: 0,
        ease: 'power4.inOut',
        duration: 3,
      })
  })

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert('Message Sent Successfully')
      }, (error) => {
        console.log(error.text);
        alert('Something went wrong!')
      });
    e.target.reset()
  };
  return (
    <div
      ref={Contact_container}
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse lg:px-10 px-3 gap-10 overflow-hidden font-comfortaa`}
    >
      <form className="formContainer flex flex-col m-auto p-10 rounded-3xl border-2 border-tertiary  " onSubmit={handleOnSubmit}>
        <p className="text-2xl text-center">Please, contact me as soon as you can!</p>
        <div className="formElement pt-10">
          <input type="text" id="from_name" name="from_name " className="bg-tertiary" placeholder="Name.." required />
        </div>

        <div className="formElement">
          <input type="email" id="from_email" name="from_email" className="bg-tertiary" placeholder="Email.." required />
        </div>

        <div className="formElement">
          <textarea name="message" rows="8" cols="30" className="bg-tertiary" placeholder="Message.." required />
        </div>
        <button type='submit' className='formButton mb-10 bg-gradient-to-r from-blue-600 to-green-500'>Submit</button>
        <hr />
        <div className="Other_contact">
          <h1 className="text-x border-b text-center">Otherwise, I'm available at.</h1>
          <div className="Connection gap-3 flex pt-5">
            <ul>
              <li className="connect">
                <a href="http://www.instagram.com/reezyee" className="links" target="_blank" rel="noreferrer">
                  <span>INSTAGRAM</span>
                </a>
              </li>
            </ul>
            <ul>
              <li className="connect">
                <a href="http://www.linkedin.com/in/reza-sapitra-592178314/" className="links" target="_blank">
                  <span>LINKEDIN</span>
                </a>
              </li>
            </ul>

          </div>
        </div>
      </form>
      <motion.div
        variants={slideIn("right", "tween", 0.5, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] Earth_plane'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");