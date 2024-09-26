import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, Skeleton, Avatar } from "@nextui-org/react";
import { ImQuotesLeft } from "react-icons/im";

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

  const supporters = [
    {
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      name: "Dr Dara",
      occupation: "Medical Doctor",
      feedback:
        "The Glow foundation is one to stand out, to reach out and help out, making global impact, one child at a time",
    },
    {
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      name: "Jane Doe",
      occupation: "Nurse",
      feedback:
        "I am proud to support the Glow foundation and its efforts to change lives.",
    },
    {
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      name: "Diana Smith",
      occupation: "Social Worker",
      feedback:
        "Every little effort counts, and the Glow foundation is making a big difference!",
    },
  ];

  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 9000); // Simulating a 2-second loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="lg:my-10 my-5">
      <div>
        <h1 className="text-lg text-orange-400 lg:text-center text-center mb-4 ">
          TESTIMONIALS
        </h1>
      </div>
      <div className="grid lg:gap-1 gap-3">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ staggerChildren: 0.5 }}
          className="lg:w-full"
        >
          <motion.h2
            className="lg:text-4xl text-3xl font-semibold lg:text-center text-center font-Inter"
            variants={textVariant}
            custom={0}
          >
            Our Supporters Voice
          </motion.h2>
        </motion.div>
        <div className="flex lg:justify-center justify-center">
          <div className="w-12 h-1 mt-1 bg-orange-400"></div>
        </div>

        <div className="w-full flex justify-center lg:py-8 py-5 px-5">
          <p className="text-center lg:text-center text-md mb-8 lg:px-12 lg:w-6/12">
            We caught up with a few of our supporters, and they had this to share with us!
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-10 flex-wrap">
        {supporters.map((supporter, index) => (
          <Card
            key={index}
            className="w-full max-w-[300px] space-y-5 p-8"
            radius="lg"
          >
            {loading ? (
              <>
                <div className="flex gap-5">
                  <div>
                      <Skeleton className="rounded-full h-16 w-16" /> 
                  </div>{/* Avatar Skeleton */}
                  <div className="space-y-1 w-full">
                    <Skeleton className="h-5 w-full rounded-lg" /> {/* Name Skeleton */}
                    <Skeleton className="h-4 w-3/4 rounded-lg" /> {/* Occupation Skeleton */}
                  </div>
                </div>
                <Skeleton className="h-16 w-full rounded-lg" /> {/* Feedback Skeleton */}
              </>
            ) : (
              <>
                <div className="flex gap-5">
                  <div>
                      <Avatar
                        src={supporter.avatar}
                        alt={supporter.name}
                        size="lg"
                      />
                  </div>
                  <div className="space-y-1 w-full">
                    <h3 className="text-lg font-bold flex items-center justify-between">
                      {supporter.name}
                      <ImQuotesLeft className="text-3xl" />
                    </h3>
                    <p className="text-sm text-orange-400">{supporter.occupation}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm">{supporter.feedback}</p>
                </div>
              </>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
