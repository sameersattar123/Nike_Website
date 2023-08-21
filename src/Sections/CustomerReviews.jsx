import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../Components/ReviewCard'

const CustomerReviews = () => {
  return (
   <section className='max-container'>
    <h3 className="text-center font-bold text-4xl font-palanquin">
    What Our
        <span className='text-coral-red'> Customers </span>
        Say?
    </h3>
    <p className='text-center info-text max-w-lg mt-4 m-auto'>
    Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
    </p>
    <div className="flex flex-1 justify-evenly gap-14 max-lg:flex-col items-center mt-24">
      {
        reviews.map((review,index) => {
          return (
            <ReviewCard
            key={index}
            imgUrl = {review.imgURL}
            rating = {review.rating}
            customerName = {review.customerName}
            feedBack = {review.feedback}        
            />
          )
        })
      }
    </div>
   </section>
  )
}

export default CustomerReviews