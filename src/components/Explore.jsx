import React from "react";
import { motion } from "framer-motion";
import BackgroundImage from "../assets/explore1.jpg";
import { SiWorldhealthorganization } from "react-icons/si";
import { IoDiamondSharp } from "react-icons/io5";
import { ImOffice } from "react-icons/im";
import { FaPeopleGroup } from "react-icons/fa6";

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

  const items = [
    {
      id: 1,
      icons: <SiWorldhealthorganization size={40}/>,
      numbers: 30,
      title: "Volunteers",
    },
    {
      id: 2,
      icons: <IoDiamondSharp size={40}/>,
      numbers: 1,
      title: "Awards",
    },
    {
      id: 3,
      icons: <FaPeopleGroup size={40}/>,
      numbers: "+3000",
      title: "Supporters",
    },
    {
      id: 4,
      icons: <ImOffice size={40}/>,
      numbers: 1,
      title: "Branch Office",
    },
  ];

  return (
    <div className="grid gap- bg-slate- lg:w-full my-12">
      <div>
        <h1 className="text-lg text-orange-400 lg:text-center text-center mb-4">
          RECENT CAUSES
        </h1>
      </div>
      <div className="grid lg:gap-1 gap-8">
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

        <div className="w-full flex justify-center lg:py-10 px-5">
          <p className="text-center lg:text-center text-md mb-8 lg:px-12 lg:w-6/12">
            Our Primary focus is to bring love and support to children in slums
            and marginalized communities through the project `Spreading Love`
          </p>
        </div>
      </div>

      <div className="relative">
        <div
          className="absolute inset-0 h-full"
          style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(.4) contrast(1.1)", // Adjust these values as needed
            zIndex: -1,
          }}
        />
        <div className="lg:py-44 p-10 flex lg:flex-row flex-col gap-10 justify-center items-center">
          <div className="flex lg:flex-row flex-col lg:justify-between items-center gap-5 w-full">
            {items.map((item) => (
              <ul key={item.id} className="text-white text-center">
                <li>
                  <div className="w-24 h-24 flex justify-center items-center rounded-full bg-orange-400">
                    {item.icons}
                  </div>
                </li>
                <li className="text-2xl font-bold mt-4">{item.numbers}</li>
                <li className="text-md">{item.title}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
