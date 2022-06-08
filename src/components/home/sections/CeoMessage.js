import React from 'react'
import {FaQuoteLeft} from 'react-icons/fa'

function CeoMessage() {
    return (
        <div class="p-3 inset-0 bg-gray-100  rounded text-gray-700 flex flex-col md:flex-row gap-3 m-auto  items-center justify-center  transition-all ease-in-out duration-1000 transform translate-x-0 ">
            <div className='w-2/3'>
                <div className='flex flex-row justify-between'>

            <FaQuoteLeft  className='text-gray-300 text-4xl'/>
                <h2 className='text-2xl uppercase'>Message</h2>
                </div>
                <p className='text-sm text-justify'>
                    Having come from a property background, Master movers dedication is to provide a first-class client experience for foreign assignees, expats and professionals wanting to move to UAE and GCC. As a relocation expert Sue and her team have featured in several UAE and GCC property programmers. Here at Master Movers, we aim provide you a personalized one stop UAE Relocation service. We support our assignees and their families to feel comfortable and settled in the UAE quickly and stress free.
                    </p><p className='text-gray-500 text-sm italic mt-3'>
                    Master Movers Director
                </p>
            </div>
            <div className='rounded'>

                <img className='object-cover h-52 w-full rounded' src='https://mastermovers.ae/wp-content/uploads/2021/05/IMG_20210402_220031-copy-2048x682.jpg' alt='chairmain' />
            </div>
        </div>
    )
}

export default CeoMessage