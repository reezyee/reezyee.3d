import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
const container = useRef(null)
useEffect(() => {
    gsap.set('.costum-cursor', {
        xPercent: -50,
        yPercent: -50,
      })
      let cursor = document.querySelector('.costum-cursor')
    //   let dev = document.querySelector('.dev')
    //   let title = document.querySelector('.Hero_content')
  
      let mouseX;
      let mouseY;
  
      window.addEventListener('mousemove', e => {
        mouseX= e.clientX
        mouseY= e.clientY
  
        gsap.to(cursor, 0.5, {x:mouseX, y:mouseY })
      })
})
    return(
        <div ref={container} className="costum-cursor rounded-full"/>
    )
}

export default Cursor