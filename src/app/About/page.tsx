import React from 'react'
import { TbTargetArrow, TbEyeHeart, TbUsersGroup, TbBuildingSkyscraper    } from "react-icons/tb";

const About = () => {
  return (
    <div className="banners">
      <div className="fixed-width grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        <div className="p-[30px] flex flex-col items-center justify-center bg-white">
          <div className="text-[16px] text-[#00204a]"><TbTargetArrow size={"34px"}/></div>
          <div className="text-[16px] text-[#00204a] mb-4">Our Mission</div>
          <p className="opacity-50 text-[14px] text-center mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, accusamus.</p>
          <div className="text-[14px] border-b-2 pb-2 border-text-primary">Learn More</div>
        </div>
        <div className="p-[30px] flex flex-col items-center justify-center bg-white">
          <div className="text-[16px] text-[#00204a]"><TbEyeHeart size={"34px"}/></div>
          <div className="text-[16px] text-[#00204a] mb-4">Our Vision</div>
          <p className="opacity-50 text-[14px] text-center mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, accusamus.</p>
          <div className="text-[14px] border-b-2 pb-2 border-text-primary">Learn More</div>
        </div>
        <div className="p-[30px] flex flex-col items-center justify-center bg-white">
          <div className="text-[16px] text-[#00204a]"><TbUsersGroup size={"34px"}/></div>
          <div className="text-[16px] text-[#00204a] mb-4">Our Employees</div>
          <p className="opacity-50 text-[14px] text-center mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, accusamus.</p>
          <div className="text-[14px] border-b-2 pb-2 border-text-primary">Learn More</div>
        </div>
        <div className="p-[30px] flex flex-col items-center justify-center bg-white">
          <div className="text-[16px] text-[#00204a]"><TbBuildingSkyscraper size={"34px"}/></div>
          <div className="text-[16px] text-[#00204a] mb-4">Our Company</div>
          <p className="opacity-50 text-[14px] text-center mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, accusamus.</p>
          <div className="text-[14px] border-b-2 pb-2 border-text-primary">Learn More</div>
        </div>
      </div>
    </div>
  )
}

export default About