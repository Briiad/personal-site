import React from 'react'
import {motion} from 'framer-motion'

import { fadeIn, fadeInBg, fadeInImg, fadeinChildren } from './animation/motion'
import * as Ai from 'react-icons/ai'

const Header = () => {
  
  return (
    <div className='relative w-full h-auto md:h-screen p-6 md:p-12 grid grid-cols-1 md:grid-cols-6'  >
      <div className='w-full h-full col-span-3 flex justify-center items-center'>
      <motion.h1 className='absolute top-20 text-7xl md:text-9xl opacity-5 z-0 text-transparent bg-clip-text bg-gradient-image-pp select-none' variants={fadeInBg} initial="hidden" animate="visible">Software <br /> Developer</motion.h1>
        <motion.div className='flex flex-col p-6 pt-20 md:pt-0 md:p-12 text-main-100 select-none' variants={fadeIn} initial="hidden" animate="visible" >
          <motion.h1 className='text-7xl md:text-8xl z-10' variants={fadeinChildren} >Im <span className='text-shadow-css'>Brian.</span></motion.h1>
          <motion.p className='my-8 text-sm md:text-base text-justify' variants={fadeinChildren}>
            I am a highly motivated and passionate Software Developer and currently
            focusing on highly interactive and responsive web applications. I also
            loved to learn new stuff and always looking for new challenges.
          </motion.p>
          <motion.div className='flex items-center text-primary' variants={fadeinChildren}>
            <p className='mr-2'>Scoll for more</p>
            <Ai.AiOutlineArrowDown />
          </motion.div>
        </motion.div>
      </div>

      <div className=' col-span-1 md:col-span-3 hidden md:flex justify-start items-center p-24 z-20'>
        <motion.div variants={fadeInImg} initial="hidden" animate="visible" whileHover={{scale:1.1, rotate:5}} >
          <img src="pp.png" alt="avatar" className='w-96 h-96 object-cover bg-gradient-image-pp rounded-lg' />
        </motion.div>        
      </div>

    </div>
  )
}

export default Header