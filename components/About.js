import React from 'react'

const About = () => {
  return (
    <section className='w-full h-auto bg-stone-50'>
      <div className="overflow-hidden w-full flex justify-end items-end">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="fill-white"></path>
        </svg>
      </div>
      <div className='py-12 rounded-lg flex flex-col justify-center items-center bg-stone-50'>
        <div className='border-2 border-primary bg-primary rounded-full drop-shadow-lg'>
          <img src="pp.png" alt="avatar" className='w-48 h-48 rounded-full object-cover' />
        </div>
        <div className='flex flex-col items-center text-center text-primary p-8'>
          <h2 className='text-3xl my-8 font-bold'>Hi, I'm Brian. It's great to see you.</h2>
          <p className='w-3/5 font-medium text-sm tracking-wide'>
            I started learning frontend development when i was 15, learning basics like HTML and CSS. Fast forward 5 years later, I am now an Undergraduate Computer Engineering Student and still loves Frontend Development using new stuff like NextJS, React, Framer Motion, and other stuff!
          </p>
        </div>
      </div>
      <div className="overflow-hidden w-full flex justify-end items-end bg-white">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="fill-stone-50"></path>
        </svg>
      </div>

    </section>
  )
}

export default About