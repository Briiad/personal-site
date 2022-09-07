import React from 'react'
import Typewriter from 'typewriter-effect'

const Header = () => {

  return (
    <div className='w-full h-screen grid grid-cols-5'>
      <div className='col-span-3 flex flex-col'>
        <div className='w-full h-3/4 bg-primary flex flex-col justify-end p-12 text-secondary'>
          <h1 className='text-5xl '>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('Frontend Developer.')
                  .pauseFor(2000)
                  .deleteChars(10)
                  .typeString('Engineer.')
                  .pauseFor(2000)
                  .start()
              }}
            />
          </h1>
          <p className='w-2/3 row-span-1 text-md my-6'>I like to build frontend products that revolves around amazing user interfaces.</p>
        </div>
      </div>

      <div className='w-full h-screen col-span-2 flex flex-col'>
        <div className='h-1/2 bg-secondary'></div>
        <div>
          <div className='p-8 text-primary'>
            <div className='grid grid-rows-2'>
              <div className='row-span-2 grid grid-cols-2 justify-items-center text-sm'>
                <p className='w-3/4 col-span-1 '>Relies on great techs like NextJS, Tailwind, GraphQL, and other stuff to build my products.</p>
                <p className='w-3/4 col-span-1 '>Greatly skilled on frontend engineering and enhancement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header