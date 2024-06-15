'use client';
import React from 'react'
import { Splide, SplideSlide } from '../../../node_modules/@splidejs/react-splide';
import { AiOutlineSearch } from "react-icons/ai";
import '@splidejs/react-splide/css';

const Hero = () => {
  const splideConfig = {
    autoplay: true,
    interval: 8000,
    speed: 1500,
    type: 'slide',
    rewind: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false
  }
  return (
    <div className='relative m-0'>
      <div className="absolute w-full">
        <Splide options={splideConfig}>
          <SplideSlide>
            <div className="h-screen w-full bg-custom-bg-3  bg-cover" />
          </SplideSlide>
          <SplideSlide>
            <div className="h-screen w-full bg-custom-bg-2  bg-cover" />
          </SplideSlide>
          <SplideSlide>
            <div className="h-screen w-full bg-custom-bg  bg-cover" />
          </SplideSlide>
        </Splide>
      </div>
      <div className="flex flex-col h-screen w-full items-center justify-end relative pb-10">
        <div className=" ">
          <div className="hidden justify-start">
            <div className=" text-zinc-900 font-semibold text-center md:text-start md:text-[21px] mb-[10px]">
              The best place to find delicious tofu in your area</div>
          </div>
          <div className="w-[300px] md:w-[500px] lg:w-[500px] flex">
            <input type="text"
              className=" outline-none w-full text-[16px] mr-[10px] h-[52px] border-none rounded-2xl px-[1.5rem] py-[18px] bg-white text-[#212529]"
              placeholder="Search by City, State" />
            <button className="bg-[#005555] px-[30px] py-[15px] rounded-full text-white flex items-center gap-1"><AiOutlineSearch size={"21px"}/> Search</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero