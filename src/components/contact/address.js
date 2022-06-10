import React from 'react'
import {GoLocation} from 'react-icons/go'
import {BsTelephone, BsWhatsapp, BsEnvelopeOpen} from 'react-icons/bs'


function Address() {
  return (
    <div className='bg-blue-800 p-4 rounded my-4'>
          <h1 className='text-orange-400 text-lg font-medium'>Sales Office</h1>
          <div className='flex flex-row items-center space-x-2 border-b border-opacity-40 p-2 border-white'>
            <div><GoLocation color='white'></GoLocation></div>
            <p className='text-white text-sm'>Office #302, Afra Arraj Building 24th Street, Al Khaleej Road Dubai, UAE</p>
          </div>

          <h1 className='text-orange-400 text-lg font-medium'>Operations</h1>
          <div className='flex flex-row items-center space-x-2 border-b border-opacity-40 p-2 border-white'>
            <div><GoLocation color='white'></GoLocation></div>
            <p className='text-white text-sm'>Warehouse No 50, Leaders Camp Stores Opposit Ramla Market Dubai Investment Park - 1, Dubai - UAE</p>
          </div>

          <div className='flex flex-row items-center space-x-2  p-2 border-white'>
            <div><BsTelephone color='white'/></div>
            <a href='tel:+97142653339' className='text-white text-sm hover:text-orange-400'>+971 4 265 3339</a>
          </div>

          <div className='flex flex-row items-center space-x-2 pl-2 border-white'>
            <div><BsWhatsapp color='white'/></div>
            <a href='https://wa.me/971502894243' _blank className='text-white text-sm hover:text-orange-400'>+971 50 289 4243</a>
          </div>
          <div className='flex flex-row items-center space-x-2 p-2 border-white'>
            <div><BsEnvelopeOpen color='white'/></div>
            <a href='mailto:info@mastermovers.ae' _blank className='text-white text-sm hover:text-orange-400'>info@mastermovers.ae</a>
          
        </div>
    </div>
  )
}

export default Address