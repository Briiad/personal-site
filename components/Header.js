import React from 'react'
import Typewriter from 'typewriter-effect'

const Header = () => {

  return (
    <div className='w-full h-screen grid grid-cols-5'>
      <div className='col-span-3 flex flex-col'>
        <div className='w-full h-1/2 bg-primary flex flex-col justify-end p-12 text-secondary'>
          <h2>I'm Brian,</h2>
          <h1 className='text-5xl '>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('a Frontend Developer.')
                  .pauseFor(2000)
                  .deleteChars(10)
                  .typeString('Engineer.')
                  .pauseFor(2000)
                  .start()
              }}
            />
          </h1>
        </div>

        <div className='p-8 text-primary'>
          <div className='grid grid-rows-3'>
            <p className='w-2/3 row-span-1 text-lg font-medium py-4'>I like to build frontend products that revolves around amazing user interfaces.</p>
            <div className='row-span-2 grid grid-cols-2 place-content-center text-sm'>
              <p className='w-3/4 col-span-1 place-self-center'>Relies on great techs like NextJS, Tailwind, GraphQL, and other stuff to build my products.</p>
              <p className='w-3/4 col-span-1 place-self-center'>Greatly skilled on frontend engineering and enhancement </p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full h-3/4 bg-secondary col-span-2'>

      </div>
    </div>
  )
}

export default Header