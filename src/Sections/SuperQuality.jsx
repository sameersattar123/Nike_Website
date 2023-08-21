import React from 'react'
import { shoe8 } from '../assets/images'
import Buttons from '../Components/Buttons'

const SuperQuality = () => {
  return (
    <section id='about us' className='flex justify-between gap-10 w-full max-container items-center max-lg:flex-col'>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">We Provide You <span className='text-coral-red'> Super </span> <span className='text-coral-red'> Quality </span>Shoes</h2>
        <p className='mt-4 lg:max-w-lg info-text'>Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.</p>
          <p className='mt-6 lg:max-w-lg info-text'> Our dedication to detail and excellence ensures your satisfaction</p>
          <div className="mt-11">
            <Buttons label="View Details"/>
          </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} 
        alt="shoe"
        width={570}
        height={522} 
        />
      </div>
    </section>
  )
}

export default SuperQuality