import React from 'react'
import {GoLocation} from 'react-icons/go'
import {BsTelephone, BsWhatsapp, BsEnvelopeOpen} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import  {RiFacebookCircleLine, RiInstagramLine, RiLinkedinFill} from 'react-icons/ri'

function Footer() {
  return (
    <div className=' bg-blue-800 w-full border-t-4 border-orange-400'>
      <div className='container m-auto flex md:flex-row sm:flex-col gap-8 space-y-4 '>
        {/* first part */}
        <div className='w-1/3'>
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

{/* second part */}
        <div className='w-1/3'>
          
        <h1 className='text-orange-400 text-lg font-medium'>Keep Moving on</h1>
          <div className='flex flex-col  space-y-2 border-b border-opacity-40 p-2  border-white'>
            <Link to='/about' className='text-white text-sm hover:text-orange-400'>About us</Link>
            <Link to='/reviews' className='text-white text-sm hover:text-orange-400'>Reviews</Link>
            <Link to='/Privacey' className='text-white text-sm hover:text-orange-400'>Privacy Policy</Link>
            <Link to='/Sitemap' className='text-white text-sm hover:text-orange-400'>Sitemap</Link>
          </div>

          <h1 className='text-orange-400 text-lg font-medium'>Follow us on</h1>
          <div className='flex flex-row  space-x-3 '>
            <RiFacebookCircleLine color='white' className='text-3xl'/> 
            <RiInstagramLine color='white' className='text-3xl'/>
            <RiLinkedinFill color='white' className='text-3xl'/>
          </div>
          </div>
        <div className='m:w-1/3'>
        <h1 className='text-orange-400 text-lg font-medium'>Relocation Services</h1>
          <div className='flex flex-col  space-y-2'>
            <Link to='/services?domestic' className='text-white text-sm hover:text-orange-400'>Domestic Movers</Link>
            <Link to='/services?air' className='text-white text-sm hover:text-orange-400'>Air Export & Import</Link>
            <Link to='/services?sea' className='text-white text-sm hover:text-orange-400'>Sea Export & Import</Link>
            <Link to='/services?storage' className='text-white text-sm hover:text-orange-400'>Storage Solutions</Link>
            <Link to='/services?UAE' className='text-white text-sm hover:text-orange-400'>Leaving the UAE</Link>

            <Link to='/?booking' className='p-3 bg-orange-400 rounded-md text-blue font-medium text-center' >Move Now</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer