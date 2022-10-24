import React from 'react'
import * as Ai from 'react-icons/ai'

const Footer = () => {
  return (
    <section className='w-full h-screen grid grid-rows-3 gap-4 py-36 px-48'>
      <div className='row-span-2 grid grid-cols-3 border-b-2 border-primary text-primary'>
        <div className='col-span-1 font-semibold'>
          <p>My Projects</p>
          <p className='my-4'>My Shelf</p>
          <p className='my-4'>My Resume</p>
        </div>

        <div className='col-span-1'>

        </div>
      </div>

      <div className='row-span-1 flex justify-between items-center text-primary'>
        <p className='italic'>	&#169; Brian Aditya 2022 </p>
        <p className='text-2xl'>
          <Ai.AiFillGithub className='inline-block mx-2' />
          <Ai.AiOutlineLinkedin className='inline-block mx-2' />
          <Ai.AiOutlineTwitter className='inline-block mx-2' />
        </p>
      </div>
    </section>
  )
}

export default Footer