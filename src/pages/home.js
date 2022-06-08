import React from 'react'
import ClientTypes from '../components/home/sections/ClientTypes'
import CovidUpdates from '../components/home/sections/CovidUpdates'
import MoversInDubai from '../components/home/sections/MoversInDubai'

function Home() {
  return (
    <div className=' container m-auto '>

      <MoversInDubai/>
    <CovidUpdates/>
<ClientTypes/>

    </div>
  )
}

export default Home