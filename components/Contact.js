import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { fromJSON } from 'postcss';

const emailJS_service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE
const emailJS_template = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE
const emailJS_public_key = process.env.NEXT_PUBLIC_EMAILJS_KEY

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(emailJS_service , emailJS_template , form.current, emailJS_public_key)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    form.current.reset()
  }

  return (
    <section className='w-full h-screen flex flex-col items-center bg-main-400 py-24 px-52'>
      <div className='w-full h-2/5 flex flex-col items-center text-center'>
        <h1 className='text-5xl font-semibold text-primary mb-4 tracking-wide'>Want to Know me More?</h1>
        <p className='w-1/2 text-lg text-main-100 opacity-75'>Have some questions or proposals, or just wanna know me? <span className='font-bold italic text-primary'>Go for it.</span></p>
      </div>
      <form className='w-full h-3/5 flex flex-col justify-center items-center text-main-100' ref={form} onSubmit={sendEmail} autoComplete='off' >
        <div className='w-3/4 grid grid-cols-5 gap-4 mb-4'>
          <input className='col-span-2 p-4 text-sm outline-none border-b-2 border-primary bg-transparent' type="text" name='name' placeholder='John Doe' required />
          <input className='col-span-3 p-4 text-sm outline-none border-b-2 border-primary bg-transparent' type="text" name='email' placeholder='example@gmail.com' required/>
        </div>
        <textarea className='w-3/4 p-4 text-sm outline-none border-b-2 border-primary bg-transparent mb-12' type="text" name='message' placeholder='Hello, we have a system for this product tat we are currently make at X Company. How soon can you join us to have a little discussion?' required/>
        <button type="submit" value='send' className='border border-primary py-4 px-32 text-primary uppercase text-sm font-semibold tracking-wider'>
          Blast off!
        </button>
      </form>
    </section>
  )
}

export default Contact