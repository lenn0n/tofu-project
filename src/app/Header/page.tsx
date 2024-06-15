'use client';
import { useState } from "react";

import { AiOutlineBars, AiOutlineClose, } from "react-icons/ai";
import { GiKnifeFork } from "react-icons/gi";

const Header = () => {

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    if (showMenu === true) {
      setShowMenu(false)
      document.body.style.overflow = 'scroll';
    } else {
      setShowMenu(true)
      document.body.style.overflow = 'hidden';
    }
  }
  return (
    <>
      <div className="header mt-0 md:mt-8 rounded-none md:rounded-xl z-10">
        <div className="flex justify-between items-center">
          <div className="font-bold text-[16px] md:text-[24px] leading-[36px] uppercase flex gap-2 items-center"><GiKnifeFork size={"25px"}/> Tofu Project</div>
          <div className="hidden md:flex">
            <div className="text-[14px] py-[10px] px-[15px]">Home</div>
            <div className="text-[14px] py-[10px] px-[15px] opacity-50" >Tofu</div>
            <div className="text-[14px] py-[10px] px-[15px] opacity-50">Services</div>
            <div className="text-[14px] py-[10px] px-[15px] opacity-50">About</div>
            <div className="text-[14px] py-[10px] px-[15px] opacity-50">Contact Us</div>
          </div>
          <div className="block md:hidden z-50" role="button" onClick={() => { toggleMenu() }}>
            <AiOutlineBars size="2rem" className={`${showMenu ? 'hidden' : 'block'}`} />
            <AiOutlineClose size="2rem" className={`${!showMenu ? 'hidden' : 'block'}`} />
          </div>
        </div>
      </div>
      <div className={`z-20  mt-[76px] h-screen w-screen bg-[#005555] opacity-40 ${showMenu ? 'absolute' : 'hidden'}`} onClick={()=>{ toggleMenu()}}></div>
      {/* OFFCANVAS */}
      <div className={`z-20 ${showMenu ? 'w-[320px]' : 'w-[0px]'} 
      mt-[76px] backdrop-blur-sm overflow-scroll
      transition-all duration-500 absolute top-0 right-0 h-screen bg-[#005555] bg-opacity-50`}>
        <div className="text-white p-4">
          <div className="font-bold mb-5">Home</div>
          <div className="font-bold mb-5">popular-banner</div>
          <div className="font-bold mb-5">Services</div>
          <div className="font-bold mb-5">About</div>
          <div className="font-bold mb-5">Contact Us</div>
        </div>
      </div>
    </>
  )
}

export default Header