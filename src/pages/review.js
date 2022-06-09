import React from 'react'
import { SubHead } from '../components/Common/CommonItems'
import CommentBox from '../components/reviews/CommentBox'
import ReviewTexts from '../components/reviews/ReviewTexts'

function Reviews() {
  return (
    <div className='container m-auto'> 
        <img src='https://mastermovers.ae/wp-content/uploads/2021/03/603dcdcf38fd26bh-01.jpg' alt='moving reviews'/>
       <ReviewTexts/>

       <SubHead title='What our Customer says -Testimonials'/>

       <CommentBox/>
    </div>
  )
}

export default Reviews