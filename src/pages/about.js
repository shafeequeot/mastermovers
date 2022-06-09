import React from 'react'
import AboutUs from '../components/aboutus/AboutUs'
import ClientsRec from '../components/aboutus/ClientsRec'

function  About() {
  return (
    <div className='container m-auto'> 
     
      <AboutUs/>
      <ClientsRec title='Our client recommendation level' pers='w-[95%]' values='95'/>
      <ClientsRec title='Percentage of clients who have returned to us' pers='w-[65%]' values='65'/>
      <ClientsRec title='Percentage of clients we have relocated from abroad' pers='w-[87%]' values='87'/>
    </div>
  )
}

export default  About