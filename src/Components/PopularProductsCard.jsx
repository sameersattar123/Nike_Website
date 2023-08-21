import React from 'react'
import { star } from '../assets/icons'

const PopularProductsCard = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt="img" 
      className='w-[282px] h-[282px]'
      />
      <div className="flex justify-start gap-2.5 mt-8">
        <img src={star} alt="rating" width={28} height={28} />
          <p className='font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>{price}</p>
    </div>
  )
}

export default PopularProductsCard