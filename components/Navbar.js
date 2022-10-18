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
    <nav className='fixed w-screen h-24 grid grid-cols-5 px-4 py-6 z-50 bg-none transition ease-in-out duration-200'>
      <div className='col-span-3 flex items-center px-6 text-2xl'>
        <h1 className='text-primary transition ease-in-out duration-20'>Logo</h1>
      </div>
    </nav>
  )
}

export default Navbar