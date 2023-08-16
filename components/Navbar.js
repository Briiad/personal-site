import React, {useState} from 'react'
import Link from 'next/link'
import {motion, AnimatePresence} from 'framer-motion'
import * as Ai from 'react-icons/ai'

import { openNav } from './animation/motion'

import HamburgerNav from './HamburgerNav'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='fixed w-screen h-24 grid grid-cols-5 md:px-4 md:py-6 z-50 bg-none transition ease-in-out duration-200'>
      <div className='col-span-3 flex items-center px-6 text-2xl '>
        <h1 className='text-primary ease-in-out duration-20'>
          <Link href='/'>
            Brian A.
          </Link>
        </h1>
        
      </div>


      <div className='col-span-2 flex justify-end items-center px-6'>
        <HamburgerNav toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        <AnimatePresence>
          {isOpen && 
            <motion.div className='absolute grid grid-rows-5 gap-2 top-0 right-0 md:top-2 md:right-auto  h-96 p-8 w-3/4 md:w-1/4 bg-main-400 text-primary' variants={openNav} initial="hidden" animate="visible" exit="exit">
              <div className='row-span-1'></div>
              <div className='row-span-1 text-sm'>My Projects</div>
              <div className='row-span-1 text-sm'>My Shelf</div>
              <div className='row-span-1 text-sm'>My Resume</div>
              <div className='row-span-1 flex justify-around border-t-2 border-primary items-center text-2xl'>
                <p className=''><Ai.AiFillGithub /></p>
                <p className=''><Ai.AiOutlineLinkedin/></p>
                <p className=''><Ai.AiOutlineTwitter /></p>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar