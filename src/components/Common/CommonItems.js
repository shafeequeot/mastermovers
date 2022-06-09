import React from 'react'

export function BigTitle(prop) {
  return (
    <h1 className='text-4xl text-blue-800 text-center p-4 uppercase font-medium'>{prop.title}</h1>
  )
}


export function SubHead(prop) {
  return (
    <h1 className='text-2xl text-blue-800 text-left py-2 uppercase font-medium my-2 stroke-gray-200 border-y'>{prop.title}</h1>
  )
}

