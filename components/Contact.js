import React from 'react'

const Contact = () => {
  return (
    <section className='w-full h-screen flex flex-col items-center bg-main-400 py-24 px-52'>
      <div className='w-full h-2/5 flex flex-col items-center text-center'>
        <h1 className='text-5xl font-semibold text-primary mb-4 tracking-wide'>Want to Know me More?</h1>
        <p className='w-1/2 text-lg text-main-100 opacity-75'>Have some questions or proposals, or just wanna know me? <span className='font-bold italic text-primary'>Go for it.</span></p>
      </div>
      <form className='w-full h-3/5 flex flex-col justify-center items-center text-main-100'>
        <div className='w-3/4 grid grid-cols-5 gap-4 mb-4'>
          <input className='col-span-2 p-4 text-sm outline-none border-b-2 border-primary bg-transparent' type="text" placeholder='John Doe'/>
          <input className='col-span-3 p-4 text-sm outline-none border-b-2 border-primary bg-transparent' type="text" placeholder='example@gmail.com'/>
        </div>
        <textarea className='w-3/4 p-4 text-sm outline-none border-b-2 border-primary bg-transparent mb-12' type="text" placeholder='Hello, we have a system for this product tat we are currently make at X Company. How soon can you join us to have a little discussion?'/>
        <button className='border border-primary py-4 px-32 text-primary uppercase text-sm font-semibold tracking-wider'>
          Blast off!
        </button>
      </form>
    </section>
  )
}

export default Contact