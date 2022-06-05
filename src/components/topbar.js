import React from 'react'
import { FaWhatsapp, FaPhoneVolume, FaEnvelope, FaFacebookF, FaInstagram } from "react-icons/fa";
function topbar() {
  return (

    <div className=" bg-orenge  h-6 shadow-lg   hidden md:block">
      <div className='container mx-auto flex flex-row justify-between items-center'>
        <div className='flex flex-row space-x-4 items-center'>
          <div className='flex flex-row items-center'>
            <FaWhatsapp className='text-lg' color="#02458F " />
            <span className='text-sm antialiased text-white'>+971 50 289 4243</span>
          </div>

          <div className='flex flex-row items-center'>
            <FaPhoneVolume className='text-sm' color="#02458F " />
            <span className='text-sm antialiased text-white'>+971 50 289 4243</span>
          </div>

          <div className='flex flex-row items-center'>
            <FaEnvelope className='text-sm' color="#02458F " />
            <span className='text-sm antialiased text-white'>+971 50 289 4243</span>
          </div>

        </div>
        <div className='flex flex-row space-x-1 items-center'>
          <p><FaFacebookF className='text-sm' color="#02458F " /></p>
          <p ><FaInstagram className='text-sm' color="#02458F " /></p>
        </div>
      </div>
    </div>
  )
}

export default topbar