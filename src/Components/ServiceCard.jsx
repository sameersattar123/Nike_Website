import React from 'react'

const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className="shadow-3xl flex-1 sm:min-w-[350px] sm:w-[350px] w-full  px-10 py-16 rounded-[20px] ">
      <div className="rounded-full flex justify-center items-center w-11 h-11 bg-coral-red">
        <img src={imgURL} alt="label"  height={24} width={24} />
      </div>
        <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>{label}</h3>
        <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>{subtext}</p>
    </div>
  )
}

export default ServiceCard