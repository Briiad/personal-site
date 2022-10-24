import React from 'react'
import { motion } from 'framer-motion'

// import motion
import { idleSVG } from './animation/motion'

const About = () => {
  return (
    <section className='w-full h-auto mt-36 bg-main-400'>
      <div className='py-12 rounded-lg flex justify-center items-center'>
        <div className='w-full flex items-center justify-around text-primary p-8'>
          <div className='flex flex-col items-center justify-center rounded-full drop-shadow-lg'>
            <img src="pp.png" alt="avatar" className='w-48 h-48 rounded-full object-cover bg-primary' />
            <h2 className='text-5xl my-8'>Hi, I'm <span className='text-secondary font-semibold'>Brian</span>.</h2>
          </div>
          <p className='w-1/2 ml-12 text-md text-main-100 text-justify'>
            I started to learn frontend development when i was 15, learning basics like HTML and CSS. Fast forward 5 years later, I am now an Undergraduate Computer Engineering Student and still loves Frontend Development using new stuff like NextJS, React, Framer Motion, and other stuff!
          </p>
        </div>
      </div>
      <div className="overflow-hidden w-full flex justify-end items-end z-0 ">
        <motion.svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" variants={idleSVG} animate="visible">
          <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="fill-primary"></path>
        </motion.svg>
      </div>

    </section>
  )
}

export default About