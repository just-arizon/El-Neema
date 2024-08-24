import React from "react";
import { Image } from "@nextui-org/react";
import Image1 from '../assets/about1.jpg'
import { motion } from "framer-motion";
const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3, // Stagger the animation
      duration: 0.6,
      ease: 'easeInOut',
    },
  }),
};
const aboutUs = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-24 py-20 gap-10 px-5">
      <div className="grid gap-">
        <div>
          <h1 className="text-lg text-orange-400 lg:text-start text-center mb-4">About Us</h1>
          </div>
        <div className="w-/12 grid lg:gap-1 gap-8">
          <motion.div 
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ staggerChildren: 0.5 }} // Staggering the child elements
          className="lg:w-9/12">
            <motion.h2 className="lg:text-4xl text-3xl font-semibold lg:text-start text-center" variants={textVariant} custom={0}>
              We have impacted 8000 kids across different states in Nigeria
            </motion.h2>

          </motion.div>
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
       <div className="lg:w-full bg-purple- ">
        <Image src={Image1} className="lg:w-8/12"/>
       </div>

      </div>
    </div>
  );
};

export default aboutUs;
