import React from 'react'

function Contact() {
  return (
    <div className=" container m-auto inset-0 my-4 text-justify rounded-md text-gray-600  flex flex-col  transition-all ease-in-out duration-1000 transform translate-x-0 ">
        <form className='from-blue-400 space-y-4'>
            <div className='flex flex-row gap-4'>

            <input className='border w-full border-gray-300 shadow h-8 rounded-sm p-2 text-gray-600 focus:border-orange-400 outline-none' placeholder='Name' type='text' name="Name" />
            <input  className='border w-full border-gray-300 shadow h-8 rounded-sm p-2 text-gray-600 focus:border-orange-400 outline-none' placeholder='Email' type='email' name="Email"/>
            <input  className='border w-full border-gray-300 shadow h-8 rounded-sm p-2 text-gray-600 focus:border-orange-400 outline-none' placeholder='Telphone' type="tel" name='Phone'/>
            </div>
            <div className='w-full'>
                
                <textarea  className='border w-full border-gray-300 shadow  rounded-sm p-2 text-gray-600 focus:border-orange-400 outline-none' placeholder='Message' rows='8' name='Message' />
                </div>
                <button className='bg-blue-800 text-orange-400 w-32 rounded-full p-2'>Submit</button>
        </form>
    </div>
  )
}

export default Contact