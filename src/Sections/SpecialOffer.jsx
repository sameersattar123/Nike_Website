import React from 'react'
import { offer } from '../assets/images'
import Buttons from '../Components/Buttons'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <div className='flex justify-center items-center gap-10 max-container max-xl:flex-col-reverse'>
      <div className="flex-1">
        <img src={offer}
         alt="offer"
         width={773}
         height={687}
         className='object-contain w-full'
         />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className='text-4xl font-palanquin font-bold'>
        <span className='text-coral-red'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'> Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.</p>
        <p className='mt-6 info-text'> Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.</p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Buttons label="Shop now" UrlIcon={arrowRight}/>
            <Buttons label="Learn more"/>
          </div>
      </div>
    </div>
  )
}

export default SpecialOffer