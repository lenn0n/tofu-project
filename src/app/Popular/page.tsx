'use client';
import React from 'react'
import Image from "next/image";
import img1 from "@public/braised-tofu.jpg"
import img2 from "@public/broccoli-tofu.jpg"
import img3 from "@public/beans-tofu.jpg"
import img4 from "@public/honey-tofu.jpg"
import img5 from "@public/japanese-tofu.jpg"
import img6 from "@public/steak-tofu.jpg"
import { GiBrain, GiAlarmClock, GiCampCookingPot } from "react-icons/gi";
import { Splide, SplideSlide } from '../../../node_modules/@splidejs/react-splide';
import '@splidejs/react-splide/css';
const Popular = () => {
  const splideConfig = {
    autoplay: true,
    interval: 5000,
    speed: 12000,
    type: 'slide',
    rewind: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
    perMove: 1,
    gap: 10,
    breakpoints: {
      640: {
        perPage: 1,
      },
      768: {
        perPage: 2,
      },
      8196: {
        perPage: 3
      }
    }
  }
  const featuredTofu = [
    {
      name: "Braised Tofu",
      image: img1,
      desc: "Bean Curd ",
      level: "Hard",
      minutes: "30 minutes",
      price: "$ 16.72"
    },
    {
      name: "Fried Broccoli Tofu",
      image: img2,
      desc: "Bean Curd ",
      level: "Medium",
      minutes: "37 minutes",
      price: "$ 13.55"
    },
    {
      name: "Stir Fried Bean Tofu",
      image: img3,
      desc: "Bean Curd ",
      level: "Easy",
      minutes: "45 minutes",
      price: "$ 2.32"
    },
    {
      name: "Japanse Tofu",
      image: img4,
      desc: "Bean Curd ",
      level: "Easy",
      minutes: "19 minutes",
      price: "$ 8.45"
    },
    {
      name: "Steak Tofu",
      image: img5,
      desc: "Bean Curd ",
      level: "Hard",
      minutes: "21 minutes",
      price: "$ 10.56"
    },
    {
      name: "Stir Fried Bean Tofu",
      image: img6,
      desc: "Bean Curd ",
      level: "Easy",
      minutes: "30 minutes",
      price: "$ 20.96"
    },
  ]
  return (

    <div className="popular-banner px-2">
      <div className="flex justify-between items-center mb-[48px]">
        <div className="text-[21px] md:text-[32px] font-medium">Popular Tofu</div>
        <button className="bg-[#005555] px-[20px] text-[16px] md:px-[30px] py-[15px] rounded-full text-white">View All Tofu</button>
      </div>

      <Splide options={splideConfig}>
        {featuredTofu?.length > 0 &&
          featuredTofu.map((tofu) => <SplideSlide key={tofu.name} className='pb-8'>
            <Image src={tofu.image} alt="" className="h-[240px] md:h-[412px] object-cover rounded-t-3xl" />
            <div className="p-[30px]  border !border-opacity-10">
              <div className="price text-[20px] font-bold text-primary mb-[0.5rem]">
                <span className="border-b-2 border-b-[#005555] pb-1">{tofu.price}</span>
              </div>
              <div className="opacity-50 text-[14px]">{tofu.desc}</div>
              <div className="font-bold text-black text-[14px] lg:text-[20px] mt-[16px]">{tofu.name}</div>
              <div className="opacity-50 text-[14px] flex gap-4 mb-4">
                <div className="flex gap-1 items-center"><GiBrain size={"18px"} /> {tofu.level}</div>
                <div className="flex gap-1 items-center"><GiAlarmClock size={"18px"} /> {tofu.minutes}</div>
              </div>
              <button
                className="flex items-center gap-2 bg-[#005555] px-[20px] py-[10px] md:px-[30px] md:py-[15px] rounded-full text-white text-[14px] md:text-[16px]">
                <GiCampCookingPot size={"18px"} />
                See Details</button>
            </div>
          </SplideSlide>)
        }
      </Splide>

    </div >
  )
}

export default Popular