import React from 'react'

function Contact() {
  return (
    <div className='-translate-y-[300px]'>
        <h1 className='text-E font-semibold text-center text-[24px]'>UMPAN BALIK KEPUASAN</h1>
        <div className='translate-y-16'>
            <form className='flex'>
                <div className='px-48'>
                    <label htmlFor="name" className='mx-3 block text-E text-sm font-semibold mb-1'>Full Name*</label>
                    <input type="text" id='name' name='name' className='shadow-xl w-[526px] h-[60px] px-4 py-2 border-2 border-E rounded-md outline-none' placeholder='Enter your full name here' required />
                    <label htmlFor="Email" className='mx-3 block text-E text-sm font-semibold mb-1 my-6'>Email*</label>
                    <input type="email" id='email' name='email' className='shadow-xl w-[526px] h-[60px] px-4 border-2 border-E rounded-md outline-none' placeholder='Enter your email here' required />
                    <button className='text-gray-400 w-[163px] h-11 border-2 border-E shadow-xl rounded-md -translate-x-[525px] translate-y-20'>Send!</button>
                </div>
                <div className='-translate-x-36'>
                <label htmlFor="message" className='mx-3 block text-E text-sm font-semibold mb-1'>Message*</label>
                    <textarea id='message' name='message' className='shadow-xl w-[526px] h-[247px] px-4 py-2 border-2 border-E rounded-md outline-none' placeholder='Enter your feedback here' required />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact