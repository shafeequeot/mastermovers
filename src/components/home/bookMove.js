import React from 'react'
import {FaTruckMoving, FaBuilding} from 'react-icons/fa'
import {GiVillage, GiBusDoors, GiDiscGolfBag} from 'react-icons/gi'
function BookMove() {
  return (
    <div className='container  py-6 flex flex-col items-center m-auto '>
        <div className='flex flex-row space-x-4 items-center m-auto'>
            <div className='bg-white rounded-lg text-gray-500 z-50 shadow-xl p-3 text-sm justify-center flex flex-col text-center items-center'>
               <FaTruckMoving color='gray' className='text-2xl' />
                Local move
            </div>

            <div className='bg-white z-50 text-gray-500 rounded-lg shadow-xl p-3 text-sm justify-center flex flex-col text-center items-center'>
                <GiVillage color='gray' className='text-2xl'/>
                Villa shifiting
            </div>

            <div className='bg-white z-50 text-gray-500 rounded-lg shadow-xl p-3 text-sm justify-center flex flex-col text-center items-center'>
               <GiBusDoors color='gray' className='text-2xl'/>               Commercial shifitng
            </div>

            <div className='bg-white z-50 text-gray-500 rounded-lg shadow-xl p-3 justify-center text-sm flex flex-col text-center items-center'>
               <FaBuilding color='gray' className='text-2xl'/>
               Flat shifting
            </div>
            <div className='bg-white z-50 text-gray-500 rounded-lg shadow-xl p-3 justify-center text-sm flex flex-col text-center items-center'>
               <GiDiscGolfBag  color='gray' className='text-2xl'/>
                Leaving UAE
            </div>
        </div>

        <div className='w-full bg-white rounded-xl shadow-lg p-8 -m-6 mb-2'>
        akdj
        </div>      

    </div>

  )
}

export default BookMove