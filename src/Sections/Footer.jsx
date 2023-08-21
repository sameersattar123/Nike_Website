import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
        <a href="/">
          <img src={footerLogo} alt="" height={46} width={150} />
        </a>
        <p className="mt-6 leading-7 text-base font-montserrat text-white-400 sm:max-w-sm"> Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards</p>
            <div className="flex items-center gap-5 mt-8">
              {
                socialMedia.map((icon) => {
                  return (
                    <div className="flex justify-center items-center bg-white rounded-full w-12 h-12 ">
                    <img 
                    src={icon.src}
                    alt={icon.alt}
                    width={24}
                    height={24}
                    />
                    </div>
                  )
                })
              }
            </div>
        </div>

        <div className="flex flex-1 justify-between gap-20 flex-wrap lg:gap-10">
          {
            footerLinks.map((section) =>{
              return (
                <div className="" key={section.title}>
                  <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>{section.title}</h4>
                  <ul>
                    {
                      section.links.map((links) => {
                        return(
                          <li key={links.link} className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'>
                            <a href={links.link}>{links.name}</a>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer