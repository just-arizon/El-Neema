import React from 'react';
import { Button, Card } from "@nextui-org/react";

const Donation = () => {
  const items = [
    {
      id: 1,
      icon: "",
      header: "Food Donate",
      body: "We are dedicated to making a difference through food donations, ensuring that no child goes hungry.",
      cta: "Donate Us", 
    },
    {
      id: 2,
      icon: "",
      header: "Medical Care",
      body: "We offer vital medical care to children in need, promoting well-being and hope. ",
      cta: "Donate Us", 
    },
    {
      id: 3,
      icon: "",
      header: "Child Education",
      body: "We believe in the transformative impact of education, providing children with opportunities for a brighter future.",
      cta: "Donate Us", 
    },
    {
      id: 4,
      icon: "",
      header: "Child Education",
      body: "We believe in the transformative impact of education, providing children with opportunities for a brighter future.",
      cta: "Donate Us", 
    },
  ];

  return (
    <section className="flex justify-center lg:h-72 bg-purple- relative lg:mx-20 px-5">
      <Card className="grid lg:grid-cols-4 grid-cols-1 lg:absolute -top-10 relative">
        {items.map((item, index) => (
          <div
            key={index}
            className={`grid px-10 py-16 
              ${index === items.length - 1 ? 'bg-orange-400' : ''} 
              lg:border-r lg:border-gray-100 
              ${index % 2 === 0 ? 'lg:border-b-0' : 'border-b lg:border-gray-100'}`}
          >
            {item.icon}
            <div className="font-semibold">{item.header}</div>
            <div className="grid grid-flow-row">
              <small className="">{item.body}</small>
              <div className=""><Button className="">{item.cta}</Button></div>
            </div>
          </div>
        ))}
      </Card>
    </section>
  );
}

export default Donation;
