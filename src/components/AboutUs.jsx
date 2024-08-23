import React from "react";
import { Image } from "@nextui-org/react";
import Image1 from '../assets/about1.jpg'
const aboutUs = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-32 py-20 gap-10 px-5">
      <div className="grid gap-">
        <div>
          <h1 className="text-lg text-orange-400 lg:text-start text-center mb-4">About Us</h1>
          </div>
        <div className="w-/12 grid lg:gap-1 gap-8">
          <div className="lg:w-9/12">
            <h2 className="lg:text-4xl text-3xl font-semibold lg:text-start text-center">
              We have impacted 8000 kids across different states in Nigeria
            </h2>

          </div>
          <div className="flex lg:justify-start justify-center">
            <div className="w-12 h-1 lg:mt-2 bg-orange-400"></div>
          </div>

          <p className="text-center lg:text-start">
            The Glow Foundation, established in September 2022, has been working
            for several years. Its mission is to provide assistance to
            underprivileged children, including street kids, slum kids, orphans,
            and those who have lacked love in their upbringing. Its primary
            focus is to help these children experience the love of God
          
          </p>
        </div>
      </div>
      <div>
       <div className="lg:w-8/12">
        <Image src={Image1}/>
       </div>

      </div>
    </div>
  );
};

export default aboutUs;
