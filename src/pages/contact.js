import React from 'react'
import ContactAddress from '../components/contact/address'
import ContactUs from '../components/contact/contact'
function Contact() {
  return (
    <div className=" container m-auto inset-0 text-justify rounded-md text-gray-600  flex flex-col  transition-all ease-in-out duration-1000 transform translate-x-0 ">
     <img src='https://mastermovers.ae/wp-content/uploads/2021/03/603dcdcf38fd2vccv-01.jpg' alt='contact movers'/>
     <div className='w-full bg-transparent bg-gray-600 -mt-8 text-white flex text-2xl uppercase justify-center'>
       Contact us
       </div>

       <div className='flex flex-row gap-4'>
         <ContactUs/>
        <div >
          <ContactAddress/>
        </div>
       </div>
    </div>
  )
}

export default Contact