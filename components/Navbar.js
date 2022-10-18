import React, { useState, useEffect } from 'react'

const Navbar = () => {

  const [changeNav, setChangeNav] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setChangeNav(true)
      } else {
        setChangeNav(false)
      }
    })
  }, [])

  return (
    <nav className={changeNav ? `fixed w-screen h-24 grid grid-cols-5 px-4 py-6 z-50 bg-white shadow-md transition ease-in-out duration-200` : `fixed w-screen h-24 grid grid-cols-5 px-4 py-6 z-50 bg-none transition ease-in-out duration-200`}>
      <div className='col-span-3 flex items-center px-6 text-2xl'>
        <h1 className={changeNav ? `text-primary transition ease-in-out duration-200` : `text-secondary transition ease-in-out duration-200`}>Logo</h1>
      </div>

      <div className='col-span-2 flex items-center justify-end text-primary text-sm 2xl:txt-lg'>
        <p className='mx-6 2xl:mx-8'>Experience</p>
        <p className='mx-6 2xl:mx-8'>Projects</p>
        <p className='mx-6 2xl:mx-8'>Contact</p>
      </div>
    </nav>
  )
}

export default Navbar