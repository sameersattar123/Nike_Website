import React from 'react'
import { Buttons } from '../Components'
import { arrowRight } from '../assets/icons'
import { statistics } from '../constants'

const Hero = () => {
  return (
    <section id='home' className="border-2 border-red-500  p-2 w-full flex flex-col md:flex-row justify-center items-center gap-10 max-container min-h-screen">
      <div className="relative xl:2-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>Our Summer Collections</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nike</span>
          Shoes
        </h1>
        <p>  Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.</p>
          <Buttons
          label="Shop Now"
          UrlIcon = {arrowRight}
          />
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 ">
            {
              statistics.map((stat) => {
                return (
                  <>
                  <p>{stat.value}</p>
                  <p>{stat.label}</p>
                  </>
                )
              })
            }
          </div>
      </div>
    </section>
  )
}

export default Hero