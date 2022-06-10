import React from 'react'
import { BigTitle, SubHead } from '../Common/CommonItems'

function Domestic() {
    return (
        <div className=" inset-0 text-justify rounded-md text-gray-600  flex flex-col  transition-all ease-in-out duration-1000 transform translate-x-0 ">
            <img src='https://mastermovers.ae/wp-content/uploads/2021/03/603da6b02a6aa2-01-1024x342.jpg' alt='moving facilites in dubai' />
            <h1 className='text-center text-2xl' >BEST LOCAL MOVERS IN DUBAI</h1>
            <BigTitle title='Unparalleled & Customized Domestic Relocations' />
            <div className='flex flex-col lg:flex-row gap-4'>
                <div className='flex-1'>
                    <p> Master Movers offers unparalleled local moving and domestic relocation services to suit your schedule and budget. No matter how busy your schedule is, our customizable domestic relocation solutions will give you the freedom to effortlessly manage your priorities before and after you move.

                        With our comprehensive domestic relocation services, we make relocating a hassle free process for you. We are well equipped to handle even the most demanding relocation challenges. Our trained crew will ensure that all your possessions and assets are handled with care and transported safely to the destination.
                    </p><p>
                        We offer competitive pricing options and tips on moving items. We also work with several corporates on their mass employee relocation programmes, offering cost effective solutions. Our years of experience & expertise enable us to serve you securely in moving your prized possessions. From packing and loading to transporting and placing items in the new location, we take care of everything.
                    </p>
                </div>
                <div className='flex-1 bg-gray-100 p-4 rounded'>
                    <SubHead title='Our domestic relocation services include the following:' />
                    <ul className=' ml-5 list-disc list-outside'>
                        <li>Pre-relocation survey</li>
                        <li>Door to Door (full moving) service & personalized services</li>
                        <li>Use of superior quality packing materials</li>
                        <li>A team of expert and experienced packers to pack your possessions
                        </li>
                        <li>Personalized loading and unloading services
                        </li>
                        <li>Personalized unpacking and rearranging services
                        </li>
                        <li>Safe and secure transfer of goods at respective destinations</li>
                        <li>Every step carried out under excellent supervision</li>
                        <li>Exceptional customer support</li>
                        <li>Complete value for money</li>
                    </ul>
                </div>
            </div>




        </div>
    )
}

export default Domestic