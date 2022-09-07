import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed w-screen h-24 grid grid-cols-5 p-6 z-50 text-secondary'>
      <div className='col-span-3 flex items-center px-6 text-2xl'>
        <h1>Logo</h1>
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