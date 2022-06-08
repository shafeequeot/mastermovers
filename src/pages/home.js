import React from 'react'
import CeoMessage from '../components/home/sections/CeoMessage'
import ClientTypes from '../components/home/sections/ClientTypes'
import CovidUpdates from '../components/home/sections/CovidUpdates'
import MoversInDubai from '../components/home/sections/MoversInDubai'
import OurServices from '../components/home/sections/OurServices'

function Home() {
  return (
    <div className=' container m-auto '>
      <div className='flex flex-grow justify-center gap-4 my-4'>
      <OurServices title='Domestic Move' image='https://mastermovers.ae/wp-content/uploads/2021/06/moving-truck.png'/>
      <OurServices title='Air Export & Import' image='https://mastermovers.ae/wp-content/uploads/2021/06/air-export.png'/>
      <OurServices title='Sea Export & Import' image='https://mastermovers.ae/wp-content/uploads/2021/06/sea-export-and-import-ship-move.png'/>
      <OurServices title='Storage Solutions' image='https://mastermovers.ae/wp-content/uploads/2021/06/Warehouse-Storage-solutions.png'/>
      <OurServices title='Leaving the UAE' image='https://mastermovers.ae/wp-content/uploads/2021/06/Leaving-uae-moving-services.png'/>
      </div>
      <MoversInDubai />
      <CovidUpdates />
      <ClientTypes />
      <CeoMessage/>

    </div>
  )
}

export default Home