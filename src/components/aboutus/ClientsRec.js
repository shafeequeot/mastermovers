import React from 'react'

function ClientsRec(prop) {
    return (
        <div className=" inset-0 bg-gray-200 p-4 rounded-md text-gray-700  flex flex-col m-4 space-y-3   transition-all ease-in-out duration-1000 transform translate-x-0 ">

  
            <p className='text-blue-800 text-sm lg:text-lg'>{prop.title}</p>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-400">
                <div className={`bg-orange-400 text-xs font-medium text-blue-100 text-center p-0.5  transition-all ease-in-out duration-1000 leading-none rounded-full ${prop.pers}`}> {prop.values}%</div>
            </div>

        </div>
    )
}

export default ClientsRec