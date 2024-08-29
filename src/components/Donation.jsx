import React from 'react';
import { Button, Card } from "@nextui-org/react";
import { PiGraduationCap } from "react-icons/pi";
import { FaHeartbeat } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Donation = () => {
  const items = [
    {
      id: 1,
      icon: <FaChartPie />,
      header: "Food Donate",
      body: "We are dedicated to making a difference through food donations, ensuring that no child goes hungry.",
      cta: "Donate Us", 
    },
    {
      id: 2,
      icon: <FaHeartbeat />,
      header: "Medical Care",
      body: "We offer vital medical care to children in need, promoting well-being and hope. ",
      cta: "Donate Us", 
    },
    {
      id: 3,
      icon: <PiGraduationCap />,
      header: "Child Education",
      body: "We believe in the transformative impact of education, providing children with opportunities for a brighter future.",
      cta: "Donate Us", 
    },
    {
      id: 4,
      icon: "",
      header: "Our main goal is to Impact Chidrens Lives!",
      cta: "BECOME A VOLUNTEER", 
    },
  ];

  return (
    <section className="flex justify-center lg:h-72 bg-purple- relative lg:mx-20 px-5">
      <Card className="grid lg:grid-cols-4 grid-cols-1 lg:absolute -top-16 relative">
        {items.map((item, index) => (
          <div
            key={index}
            className={`grid px-10 py-16 gap-5 
              ${index === items.length - 1 ? 'bg-orange-400 text-2xl text-' : ''} 
              lg:border-r lg:border-gray-100 
              ${index % 2 === 0 ? 'lg:border-b-0' : 'border-b lg:border-gray-100'}`}
          >
            <div className="text-4xl text-orange-500">{item.icon}</div>
            <div className="font-semibold">{item.header}</div>
            <div className="grid grid-flow-row gap-5">
              <small className="">{item.body}</small>
              <div className=""><Button className={`
              ${index === items.length - 1 ? ' text-white bg-transparent font-semibold' : 'bg-transparent font-semibold text-orange-500'}
uppercase
              `
              
              }
              >{item.cta}
              <FaArrowRight />
              </Button></div>
            </div>
          </div>
        ))}
      </Card>
    </section>
  );
}

export default Donation;
