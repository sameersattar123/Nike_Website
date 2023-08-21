import React from 'react'

const Buttons = ({label , UrlIcon}) => {
  return (
    <button className="flex items-center border font-montserrat  leading-none text-lg bg-coral-red border-coral-red  py-4 px-7 rounded-full  text-white gap-2 justify-center ">
      {label}
     {UrlIcon &&  <img src={UrlIcon} alt="" className='w-5 h-5 rounded-full ml-3' />}
    </button>
  )
}

export default Buttons