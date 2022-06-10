import React from 'react'
import { NavLink} from 'react-router-dom'
import {FaTruckMoving} from 'react-icons/fa'
import {GiBusDoors, GiDiscGolfBag} from 'react-icons/gi'
function BookType() {
  return (
    <div className='container  py-6 flex flex-col items-center m-auto '>
        <div className='flex flex-row space-x-4 items-center m-auto -mb-12 transition-all ease-in-out duration-1000'>
            <NavLink to='/' className='bg-white rounded-lg text-gray-500 z-10 shadow-xl p-3 text-sm justify-center flex flex-col text-center items-center space-y-3'>
               <FaTruckMoving color='gray' className='text-2xl' space-y-3/>
               <p> Local Move </p>
            </NavLink>
          
            <NavLink to='/international' className='bg-white z-10 text-gray-500 rounded-lg shadow-xl p-3 justify-center text-sm flex flex-col text-center items-center space-y-3'>
               <GiDiscGolfBag  color='gray' className='text-2xl'/>
                <p>Leaving UAE</p>
            </NavLink>
         
            <NavLink to='/commercial'  className='bg-white  z-10 text-gray-500 rounded-lg shadow-xl p-3 text-sm justify-center flex flex-col text-center items-center space-y-3'>
               <GiBusDoors color='gray' className='text-2xl'/>            <p> Commercial Move </p>
            </NavLink>
        </div>

             

    </div>

  )
}

export default BookType