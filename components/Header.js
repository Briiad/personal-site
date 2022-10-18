import React from 'react'
import Typewriter from 'typewriter-effect'

const Header = () => {

  return (
    <div className='w-full h-screen grid grid-cols-6'>
      <div className='col-span-3 flex flex-col'>
        <div className='w-full h-full flex flex-col justify-center p-12 text-primary text-shadow-css'>
          <h1 className='text-9xl'>
            FRONT-
          </h1>
          <h1 className='text-9xl'>END</h1>
          <h1 className='text-8xl'>ENGINEER</h1>
        </div>
      </div>

      <div className='col-span-3 flex justify-center items-center p-24'>
        <div className='w-full h-full border-2 border-main-100 rounded-lg p-8'>
          <div className='text-main-100 text-sm font-courier-new'>
            <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('var hello = "Hello Random Person!";')
                    .typeString('<br>')
                    .typeString('console.log(`hello + " welcome to my site!"`);')
                    .typeString('<br></br>')
                    .typeString('const arr = [];')
                    .typeString('<br>')
                    .typeString('const thing0 = "You see, im very interested in code and stuff.";')
                    .typeString('<br>')
                    .typeString('const thing1 = "And im pretty good at it too lol.";')
                    .typeString('<br>')
                    .typeString('arr.append(thing0);')
                    .typeString('<br>')
                    .typeString('arr.append(thing1);')
                    .typeString('<br>')
                    .pauseFor(2000)
                    .start()
                }}
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header