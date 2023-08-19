import React from 'react'
import {headerLogo} from "../assets/images"
import {hamburger} from "../assets/icons"
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <header className='absolute py-8 padding-x  w-full z-10'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={30} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {
            navLinks.map((item) => {
              return(
                <li className='font-montserrat  leading-normal text-lg text-slate-gray'>
                  <a href={item.href}>{item.label}</a>
                </li>
              )
            })
          }
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="" width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar