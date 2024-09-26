import React from 'react'
import { motion } from "framer-motion";

const Testimonials = () => {

    const textVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.3, // Stagger the animation
            duration: 0.6,
            ease: "easeInOut",
          },
        }),
      };
  return (
    <div>
        <div>
      <h1 className="text-lg text-orange-400 lg:text-center text-center mb-4 ">
        TESTIMONIALS
      </h1>
    </div>
    <div className=" grid lg:gap-1 gap-8 ">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ staggerChildren: 0.5 }} // Staggering the child elements
        className="lg:w-full"
      >
        <motion.h2
          className="lg:text-4xl text-3xl font-semibold lg:text-center text-center"
          variants={textVariant}
          custom={0}
        >
          Our Supporting Voice
        </motion.h2>
      </motion.div>
      <div className="flex lg:justify-center justify-center">
        <div className="w-12 h-1 lg:mt-2 bg-orange-400"></div>
      </div>

      <div className="w-full flex justify-center lg:py-10 px-5">
          <p className="text-center lg:text-center text-md mb-8 lg:px-12 lg:w-6/12">
          We caught up with a few of our supporters and the had this to share with us!
          </p>
      </div>
    </div>
    </div>
  )
}

export default Testimonials