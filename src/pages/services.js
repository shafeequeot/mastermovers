import React from 'react'
import Domestic from '../components/services/Domestic'
import Air from '../components/services/Air'

function Services() {
  return (
    <div className='container m-auto flex flex-col gap-8'>
      <Domestic/>
      <Air/>
    </div>
  )
}

export default Services