import React from 'react'
import * as Ai from 'react-icons/ai'

const SideContact = () => {
  return (
    <nav className='fixed w-full h-screen'>
      <div className='w-full h-full flex flex-col justify-end items-end p-6 text-primary'>
        <p className="text-2xl my-4"><Ai.AiOutlineGithub /></p>
        <p className="text-2xl my-4"><Ai.AiOutlineTwitter /></p>
        <p className="text-2xl my-4"><Ai.AiOutlineLinkedin /></p>
      </div>
    </nav>
  )
}

export default SideContact