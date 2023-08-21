import React from 'react'
import Buttons from '../Components/Buttons'

const Subscribe = () => {
  return (
    <section className='max-container flex max-lg:flex-col justify-between items-center gap-10'
    id='contact-us'
    >
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
      Sign Up for
        <span className='text-coral-red'> Updates </span>& Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" className='input'  placeholder='subscribe@nike.com'/>
        <div className="flex max-sm:justify-center items-center max-sm:w-full">
          <Buttons label="Sign up" fullWidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe