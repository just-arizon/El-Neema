import React, { useState } from "react";
import Landing from "../assets/landing.jpg";
import { Button, Link, Card, CardBody, CardHeader } from "@nextui-org/react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
// Animation variants for the text paragraphs
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

const LandingPage = () => {
  const [showVideo, setShowVideo] = useState(false);
 
  return (
    <motion.div className="relative flex flex-row gap-8">
      <div
        className="grid-layout bg-cover bg-center lg:w-full w-full h-full absolute"
        style={{ backgroundImage: `url(${Landing})` }}
      >
        {/* Apply an overlay to reduce brightness */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="landing relative flex flex-col justify-center items-center z-10 w-full h-screen">
        <div className="flex flex-col justify-center mb-5 mt-5 lg:pr-40 lg:pl-20 px-8">
          <motion.h1
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ staggerChildren: 0.5 }} // Staggering the child elements
            className="text-white lg:text-7xl md:text-5xl text-4xl lg:font-semibold font-bold lg:text-start text-center lg:w-full md:w-full"
          >
            <motion.div
              variants={textVariant}
              custom={0}
              className="text-orange-400"
            >
              Empowering Underprivileged
            </motion.div>
            <motion.div variants={textVariant} custom={1}>
              Children For A Brighter Tomorrow
            </motion.div>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={textVariant}
            custom={2}
            className="text-white lg:text-start text-center py-7 lg:w-3/4"
          >
            The Watch Word: Discover how much Light each child can bring into
            the world as individuals, inspiring hope and igniting change to make
            a difference today.
          </motion.p>

          <div className="flex lg:justify-start justify-center pt-5 gap-4">
            <Button
              as={Link}
              href={"#"}
              className="bg-orange-500 text-white rounded-full font-bold px-8"
              size="lg"
            >
              Donate
            </Button>

            <div className="">
              <div
                className="bg-white text-white rounded-full animate-pulseBorder border-transparent w-12 h-12 flex justify-center"
                size=""
              >
                <Button
                  className="bg-transparent"
                  size="lg"
                  onClick={() => setShowVideo(true)}
                >
                  <FaPlay className="text-orange-500" />
                </Button>
              </div>
            </div>

          </div>

          {/* YouTube iframe with close button */}
          {showVideo && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
              <div className="relative gap-5 grid">
                <div className="flex justify-center">
                  <button
                    onClick={() => setShowVideo(false)}
                    className=" text-white bg-white bg-opacity-20 backdrop-blur-lg border border-white border-opacity-20 rounded-full w-10 h-10 z-50 flex justify-center items-center text-lg"
                  >
                    <IoMdClose />
                  </button>
                </div>
                <div className="px-5">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
