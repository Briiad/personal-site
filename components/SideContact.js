import React from 'react'
import * as Ai from 'react-icons/ai'

const SideContact = () => {
  return (
    <nav className='fixed w-full h-screen z-10'>
      <div className='w-full h-full flex flex-col justify-center items-end p-6 text-primary'>
        <p className="text-2xl my-4"><a href='https://github.com/Briiad' target="_blank"><Ai.AiOutlineGithub /></a></p>
        <p className="text-2xl my-4"><a href='https://twitter.com/bwitatoo' target="_blank"><Ai.AiOutlineTwitter /></a></p>
        <p className="text-2xl my-4"><a href='https://www.linkedin.com/in/brian-aditya-dharmatirta' target="_blank"><Ai.AiOutlineLinkedin /></a></p>
      </div>
    </nav>
  )
}

export default SideContact