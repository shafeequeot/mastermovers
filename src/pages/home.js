import React from 'react'
import CovidUpdates from '../components/home/sections/CovidUpdates'
import MoversInDubai from '../components/home/sections/MoversInDubai'

function Home() {
  return (
    <div className=' container m-auto '>

      <MoversInDubai/>
    <CovidUpdates/>


    </div>
  )
}

export default Home