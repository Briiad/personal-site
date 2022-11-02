import React from 'react'
import { motion } from 'framer-motion'

// import motion
import { idleSVG } from './animation/motion'

const About = () => {
  return (
    <section className='relative w-full h-auto bg-main-400'>
      <h1 className='absolute font-bold text-7xl md:text-9xl opacity-20 p-4 md:p-36 top-0 text-main-100 text-transparent bg-clip-text bg-gradient-image-pp'>My Skills</h1>
      <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-8 md:p-36'>
        <div className='col-span-1 flex justify-center'>
          <div className='w-full pt-20 md:pt-0 md:w-2/3 text-4xl font-bold text-main-100'>
            <h2>Frontend Development & Interactive User Interface</h2>
          </div>
        </div>

        <div className='col-span-1 flex justify-center'>
          <p className=' text-main-100 text-justify opacity-75'>
            I love to build a complex web applications and 
            a strong passion for building a beautiful and interactive user interfaces
            while maintaining a high performance and scalability.
            <br /> <br />
            I seek a lot of inspiration from the latest trends in the web development
            and also opportunities to cooperate on a project around gorgeous design and
            clean code. While im still learning and improving my skills, I am always open
            to new challenges and ready againts any problem that may arise.

          </p>
        </div>
      </div>

      <div class=" w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="fill-main-500"></path>
        </svg>
      </div>

    </section>
  )
}

export default About