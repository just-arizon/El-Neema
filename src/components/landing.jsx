import React from 'react';
import Landing from '../assets/landing.jpg';

const LandingPage = () => {
  return (
    <div className="relative flex flex-row gap-8">
      <div
        className="grid-layout bg-cover bg-center lg:w-full w-full h-full  absolute"
        style={{ backgroundImage: `url(${Landing})` }}
      >
        {/* Apply an overlay to reduce brightness */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="landing relative flex flex-col justify-center items- z-10 w-full h-screen">
        <div className="flex flex-col justify- mb-5 mt-5 lg:px-32 px-8">
          <h1 className="text-white lg:text-7xl md:text-5xl text-4xl lg:font-semibold font-bold lg:text-start text-center lg:w-full md:w-full">
            <div className="text-orange-400">Empowering Underprivileged</div>
            <div>Children For A Brighter Tomorrow</div>
          </h1>
          <p className='text-white lg:text-start text-center py-7 lg:w-3/4'>The Watch Word: Discover how much Light each child can bring into the world as individuals, inspiring hope and igniting change to make a difference today.</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
