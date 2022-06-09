import React, { useState } from 'react'
import { BigTitle } from '../Common/CommonItems'

import  Fireapp  from '../firebase/config';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const db = getFirestore(Fireapp)




function CommentBox() {
  const [star, setStar] = useState(5)
  const [comment, setComment] = useState('')
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')

  const submit = ()=>{

    addDoc(collection(db, 'reviews'),{
      star: star,
     comment: comment ,
      name: name,
      mobile: mobile,
      email : email
    }).then((res)=>{
    
      stateReseting()
    })
  }

  const stateReseting=()=>{
    setStar(1)
    setComment('')
    setName('')
    setMobile('')
    setEmail('')
  }

  return (
    <div className='my-4 space-y-3'>

      <BigTitle title='Tell About us' />

      <div className="flex items-center hover:cursor-pointer">
        <svg onClick={() => setStar(1)} className={`w-8 h-8  ${star >= 1 ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg onClick={() => setStar(2)} className={`w-8 h-8  ${star >= 2 ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg onClick={() => setStar(3)} className={`w-8 h-8  ${star >= 3 ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg onClick={() => setStar(4)} className={`w-8 h-8  ${star >= 4 ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg onClick={() => setStar(5)} className={`w-8 h-8  ${star >= 5 ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
      </div>
      <textarea placeholder='Your comments' value={comment} onChange={(evt) => setComment(evt.target.value)
      } className='p-2 rounded w-full border-gray-200 outline-none border focus:border-orange-400' rows='8' />
      <div className='flex flex-row gap-3'>
        <input value={name} onChange={(evt) => setName(evt.target.value)} className='p-2 rounded w-full border-gray-200 outline-none border focus:border-orange-400' type='text' placeholder='Name*' />

        <input value={email} onChange={(evt) => setEmail(evt.target.value)} className='p-2 rounded w-full border-gray-200 outline-none border focus:border-orange-400' type='email' placeholder='Email*' />

        <input value={mobile} onChange={(evt) => setMobile(evt.target.value)} className='p-2 rounded w-full border-gray-200 outline-none border focus:border-orange-400' type='text' placeholder='Phone' />
      </div>
      <button onClick={submit} className='p-2 w-full bg-blue-900 rounded text-white hover:bg-orange-400'>Submit</button>

    </div>
  )
}

export default CommentBox