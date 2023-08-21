import React from 'react'
import { services } from '../constants'
import ServiceCard from '../Components/ServiceCard'

const Services = () => {
  return (
    <section className='flex justify-center gap-10 max-container flex-wrap '>
      {
        services.map((service) => {
          console.log(service)
          return (
            <>
            <ServiceCard
            key={service.imgURL}
            {...service}
            />
            </>
          )
        })
      }
    </section>
  )
}

export default Services