import React, { useEffect, useState } from 'react'
import { SubHead } from '../components/Common/CommonItems'
import CommentBox from '../components/reviews/CommentBox'
import CustReviews from '../components/reviews/custReviews'
import ReviewTexts from '../components/reviews/ReviewTexts'
import Fireapp from '../components/firebase/config'

import { getFirestore, collection, getDocs, query, onSnapshot, doc } from 'firebase/firestore';





 function Reviews () {

  const [commets, setCOmments] = useState([])

useEffect(()=>{

  // collection(db, 'reviews')
  const q = query(collection(db, "reviews"))
  onSnapshot(q,(db),(querySnapshot)=>{
    setCOmments(
    querySnapshot.docs.map((doc) => (
      { id: doc.id,
        data: doc.data()}
    ))
    )
  })
  


},[])


  const db = getFirestore(Fireapp)

console.log(commets)
  return (


    <div className='container m-auto'> 
        <img src='https://mastermovers.ae/wp-content/uploads/2021/03/603dcdcf38fd26bh-01.jpg' alt='moving reviews'/>
       <ReviewTexts/>

       {/* <SubHead title='What our Customer says -Testimonials'/> */}
       <div className='grid grid-cols-1 gird-col gap-0 md:grid-cols-2 lg:grid-cols-3'>
      {
        commets.map(({id, data})=>(
          // console.log(name)
          <CustReviews key={id} name={data.name} star = {data.star} comment={data.comment}/>
        ))
      } 

      
       </div>

       <CommentBox/>
    </div>
  )
}

export default Reviews