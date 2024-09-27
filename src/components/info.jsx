import React from 'react'
import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
const info = () => {
  return (
    <div className='bg-orange-700 w-full py-3 text-white text-center gap-2 flex justify-between px-20 lg:flex hidden'>
      <div className="flex gap-5">
        <small className="flex gap-1">
          <div className='flex items-center'><FaPhoneFlip /></div>
          <div>+234 813 628 0417</div>
          </small>
        <small className="flex gap-1">
        <div className='flex items-center'><MdOutlineMailOutline /></div>
          <div>elneemacaresinitiative@gmail.com</div>
          </small>
          <small className="flex gap-1">
        <div className='flex items-center'><IoLocationSharp /></div>
          <div> 13, Line 3, Police Estate Karsana, Abuja</div>
          </small>
      </div>

      <div className="flex gap-5">
        <small className="flex gap-1">
          <div className='flex items-center'><FaPhoneFlip /></div>
          <div>+234 813 628 0417</div>
          </small>
        <small className="flex gap-1">
        <div className='flex items-center'><MdOutlineMailOutline /></div>
          <div>info@gmail.com</div>
          </small>
      </div>

      </div>
  )
}

export default info