import React from 'react'
import { motion } from "framer-motion";
import BackgroundImage from "../assets/explore1.jpg"; 
const Explore = () => {

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
   <div className="grid gap- bg-slate- lg:w-full my-12">
    <div>
      <h1 className="text-lg text-orange-400 lg:text-center text-center mb-4 ">
        RECENT CAUSES
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
          Explore Our Causes
        </motion.h2>
      </motion.div>
      <div className="flex lg:justify-center justify-center">
        <div className="w-12 h-1 lg:mt-2 bg-orange-400"></div>
      </div>

      <div className="w-full flex justify-center py-10">
          <p className="text-center lg:text-center text-md mb-8 lg:px-12 lg:w-6/12">
           Our Primary focus is to bring love and support to children in slums and marginalized communities through the project `Spreading Love`
          </p>
      </div>
    </div>
    <div className="relative"  
    >
        <div
        className='absolute inset-0 h-full'
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(.4) contrast(1.1)', // Adjust these values as needed
          zIndex: -1,
        }}
      />
         <div className="p-28">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum sint assumenda expedita perspiciatis id libero, quod cumque quae. Id accusamus expedita cupiditate aspernatur rerum debitis ipsam sunt eveniet blanditiis voluptatum commodi pariatur perspiciatis, voluptates optio atque quis itaque quia at provident similique sequi. Deleniti, aut reiciendis unde repellat rem maxime aliquid minima quidem odit laborum hic odio libero quae, labore quo incidunt autem vero velit obcaecati maiores non rerum itaque? Provident numquam nihil excepturi illum beatae nemo aperiam explicabo, esse error architecto facilis. Adipisci, commodi sit labore possimus corporis voluptas at voluptatibus blanditiis repellat asperiores culpa, quibusdam saepe, incidunt atque?
         </div>
    </div>
  </div>
  )
}

export default Explore