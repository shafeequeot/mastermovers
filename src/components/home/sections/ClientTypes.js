import React from 'react'
import { Link } from 'react-router-dom'

function ClientTypes() {
  return (
    <div class=" inset-0  text-gray-700 md:flex-col flex flex-col m-4 space-y-3 items-center justify-center  transition-all ease-in-out duration-1000 transform translate-x-0 ">
        <h3 className='text-2xl '>OUR PARTNERS</h3>
        <div className='flex flex-row  space-x-4 w-full rounded-md'>
            <div className='w-1/3 p-3 bg-blend-multiply space-y-3 bg-[url(https://blog.hubspot.com/hubfs/how-to-start-a-business.jpeg)] bg-blue-900 hover:bg-orange-400 hover:scale-110 ease-in-out duration-500 hover:cursor-pointer transform flex flex-col items-center'>
                <h2 className='text-2xl text-white'>Private Clients</h2>
                <p className='text-sm text-white'>As a private or independent relocation client moving to GCC or the UAE, we can assist you with your home and school or pet searches, arrange your utility services, ensuring a one-stop, stress-free relocation package.</p>
                <Link className='p-2 bg-orange-400 rounded-full w-48 text-center text-white hover:bg-blue-800' to='/services'>find more</Link>
            </div>
            
            <div className='w-1/3 p-3 bg-blend-multiply space-y-3 bg-blue-900 bg-[url(https://blog.hubspot.com/hubfs/how-to-start-a-business.jpeg)] hover:bg-orange-400 hover:scale-110 ease-in-out duration-500 hover:cursor-pointer transform flex flex-col items-center'>
                <h2 className='text-2xl text-white'>Corporate Clients</h2>
                <p className='text-sm text-white'>Our HR relocation support is a cost-effective UAE relocation solution designed to support you and your employees. Our aim is to maximise budgets and reduce relocation disruption from Manager to CEO.</p>
                <Link className='p-2 bg-orange-400 rounded-full w-48 text-center text-white hover:bg-blue-800' to='/services'>find more</Link>
            </div>
            
            <div className='w-1/3 p-3 bg-blend-multiply space-y-3 bg-[url(https://blog.hubspot.com/hubfs/how-to-start-a-business.jpeg)] bg-blue-900 hover:bg-orange-400 hover:scale-110 ease-in-out duration-500 hover:cursor-pointer transform flex flex-col items-center'>
                <h2 className='text-2xl text-white'>Concierge Services</h2>
                <p className='text-sm text-white'>Master movers Lifestyle provides a personal concierge experience without the typical concierge membership fees. We offer a fantastic range of VIP services including global events, gift purchases, holidays and experience packages.</p>
                <Link className='p-2 bg-orange-400 rounded-full w-48 text-center text-white hover:bg-blue-800' to='/services'>find more</Link>
            </div>
        </div>
    </div>
  )
}

export default ClientTypes