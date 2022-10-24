import React, {useState} from 'react'

import HamburgerNav from './HamburgerNav'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='fixed w-screen h-24 grid grid-cols-5 px-4 py-6 z-50 bg-none transition ease-in-out duration-200'>
      <div className='col-span-3 flex items-center px-6 text-2xl'>
        <h1 className='text-primary transition ease-in-out duration-20'>Logo</h1>
      </div>


      <div className='col-span-2 flex justify-end items-center px-6'>
        <HamburgerNav toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        {isOpen && 
          <div className='absolute top-2 h-96 p-8 w-1/4 bg-primary text-white'>
            <p className='mx-6'>Projects</p>
            <p className='mx-6'>Shelf</p>
            <p className='mx-6'>Resume</p>
          </div>
        }
      </div>
    </nav>
  )
}

export default Navbar