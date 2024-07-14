import { BrowserRouter } from "react-router-dom"
import gsap from "gsap";
import ScrollSmoother from "gsap/all";
import { useGSAP } from "@gsap/react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Cursor } from './components';
import { styles } from "./styles";
import { logo } from "./assets";
import { useEffect, useRef } from "react";

const App = () => {
  // const El_intro = useRef(null)
  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const t1 = gsap.timeline()
  //     t1.from('.Intro_content', {
  //       opacity: 0,
  //       x: '+=30',
  //       stagger: 0.5
  //     }).to('.Intro_content',{
  //       opacity: 0,
  //       x: '-=30',
  //       delay: 0.3,
  //       stagger: 0.5
  //     })
  //   }, El_intro)

  //   return() => ctx.revert()
  // }, [])


  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary" id="smooth-wrapper">
        <div id="smooth-content">
          {/* <div ref={El_intro} className="Slider absolute h-screen p-10 z-20 w-full bg-inherit"> */}
          {/* <img src={logo} alt="" className="Intro_content absolute z-20"/> */}
          {/* </div> */}
          <div id="Comp_content" className="bg-cover bg-no-repeat bg-center">
            {/* <Cursor/> */}
            <Navbar />
            <Hero />
          </div>
          <About />
          {/* <Experience /> */}
          <Tech className={`${styles.paddingY} mt-20`} />
          <Works />
          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
