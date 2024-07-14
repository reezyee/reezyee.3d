import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

import { useGSAP } from '@gsap/react';
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import { easeIn, stagger } from 'framer-motion';
// import { center } from 'maath/dist/declarations/src/buffer';

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  const Nav_container = useRef(null)

  useGSAP(() => {
    gsap.from('.Logo', {
      y: -100,
      content: 'center',
      duration: 1.5,
      ease: 'bounce.out'
    })
    gsap.from('.link', {
      opacity: 0,
      stagger: .5,
      duration: 2,
      delay: 1.8
    },)
  })

  return (
    <nav ref={Nav_container} className={`
    ${styles.paddingX} w-full flex items-center py-5 absolute top-0 z-10 Nav_content`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0)
        }}>
          <img src={logo} alt="logo" className='h-9 object-contain Logo' />
        </Link>
        <ul className="link list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => (
            <li key={Link.id} className={`${active === Link.title
              ? "text-white"
              : "text-white"
              } hover:border-b text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}>
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        {/* <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-[#318db2] absolute top-20 ring-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-md`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4 link">
              {navLinks.map((Link) => (
                <li key={Link.id} className={`${active === Link.title
                  ? "text-white"
                  : "text-white"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(Link.title)
                  }}>
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
    </nav>
  )
}

export default Navbar