import React from 'react'

function OurServices(props) {
  return (
    <div className='flex flex-col justify-center  gap-2  p-4 text-center items-center rounded border border-gray-200 shadow-sm'>
        <img src={props.image} className="w-12" alt='services'/>
        <p className='text-blue-900 font-medium'>{props.title}</p>
    </div>
  )
}

export default OurServices