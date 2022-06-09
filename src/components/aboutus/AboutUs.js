import React from 'react'
import { BigTitle, SubHead } from '../Common/CommonItems'
import CeoMessage from '../home/sections/CeoMessage'

function AboutUs() {
  return (
    <div class=" inset-0  text-gray-700  flex flex-col m-4 space-y-3   transition-all ease-in-out duration-1000 transform translate-x-0 ">
      <BigTitle title='RELOCATIONS, STORAGE SERVICES & MOVERS IN DUBAI' />
      <img className='my-3' src='https://mastermovers.ae/wp-content/uploads/2021/05/IMG_1634-1.jpg' alt='movers memebers' />

      <div className='flex flex-col md:flex-row gap-4'>
        <div className='lg:w-1/2'>
          <p className=' text-justify text-sm'>Master  Movers is an award-winning Storage Services and Movers in Dubai based, international and domestic relocation and storage providers. Bringing decades combined experience in the UAE Relocation and Property sector. Assisting our corporate and private clients relocate to GCC and the UAE as well helping them to find homes for purchase. One of the premier relocation companies for moves to Dubai and the UAE, Master Movers over the years have built a reputation for providing clients with a friendly professional approach and excellent support from the very beginning of their move to their move-in day and beyond. We have often been involved as global relocation experts. Master Movers also provides premium brand concierge services with exclusive lifestyle packages, Sea Export, Sea Import, Air Export, Air Import, Domestic Move, and Storage Solutions. Check out our exclusive and competitive premium services.
          </p>
          <SubHead title='You are important to us' />
          <p className=' text-justify text-sm'>
            We understand the importance to our clients of providing a personal, discreet, professional service.  Our goal is always to save you time and stress and we are dedicated to providing you with a positive relocation experience. Read our testimonials to see how we look after clients and we appreciate the feedback they provide on Google Reviews and on our website.
          </p>
          <SubHead title='Benefits of using us' />
          <p className='text-justify text-sm'>
            The main benefits of using Master Movers as your Dubai relocation agents for Air & Sea Export and Import, Storage Solution is that we act solely on your behalf and therefore offer a completely independent service. You will be shown properties from a range of local agents and developers, which match the criteria agreed with you beforehand. We do not have any financial stake in any of properties shown.  Our commitment is to you to:
          </p>

          <ul className='text-sm list-disc list-inside space-y-2 my-3'>
            <li> Provide you with total support from the very beginning of your relocation through to your actual move and beyond </li>
            <li> Offer unbiased, independent advice on properties in the new location </li>
            <li> Provide you with information and local knowledge on the new location </li>
            <li> Help you find a new home for your UK relocation which matches your requirements and agreed budget </li>
            <li> Give you access to properties which have not been put onto the open market</li>
            <li>Manage your whole relocation to save you time and stress </li>

          </ul>
          <SubHead title='Testimonials' />
          <p className=' text-justify text-sm'>Being a best relocations, storage services and movers in UAE. Our client testimonials speak for themselves with a common theme of a fast response and personal service. to provide best services, we try to generate and foster a genuinely caring approach. We always treat our clients as individuals, not as a numbers. “Great service, quick and easy communication, always friendly would highly recommend” </p>

        </div>
        <div className='w-1/2 hidden lg:block'>
          <CeoMessage />
        </div>
      </div>

    </div>

  )
}

export default AboutUs