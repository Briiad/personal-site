import React, {useState} from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import * as Ai from 'react-icons/ai'

import HamburgerNav from './HamburgerNav'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='fixed w-screen h-24 grid grid-cols-5 px-4 py-6 z-50 bg-none transition ease-in-out duration-200'>
      <div className='col-span-3 flex items-center px-6 text-2xl '>
        <h1 className='text-primary transition ease-in-out duration-20'>
          <Link href='/'>
            Logo
          </Link>
        </h1>
        
      </div>


      <div className='col-span-2 flex justify-end items-center px-6'>
        <HamburgerNav toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        {isOpen && 
          <div className='absolute grid grid-rows-5 gap-2 top-2 h-96 p-8 w-1/4 bg-main-100 text-primary'>
            <div className='row-span-1'></div>
            <div className='row-span-3 flex flex-col justify-around'>
              <p className=''>Projects</p>
              <p className=''>Shelf</p>
              <p className=''>Resume</p>
            </div>
            <div className='row-span-1 flex items-end'>
              <p className=''><Ai.AiFillGithub /></p>
              <p className=''><Ai.AiOutlineLinkedin/></p>
              <p className=''><Ai.AiOutlineTwitter /></p>
            </div>
          </div>
        }
      </div>
    </nav>
  )
}

export default Navbar