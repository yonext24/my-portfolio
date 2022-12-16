import React from 'react'
import Scroll from './Scroll'

export default function WelcomeSection() {
  return <section className='w-screen h-screen flex flex-col items-center relative'>
    <div className='w-4/5 max-w-4xl h-full mx-auto flex justify-center items-center'>
      <article className='grid grid-cols-[1fr_auto] h-[60%] bg-transparent place-content-center rounded-3xl p-5 pr-8 shadow-xl
       transition-[background-color,transform] duration-200 border-2 border-mainpurple backdrop-blur-[2px] hover:-translate-y-1'>
        <div className='flex flex-col justify-center'>
          <div>
            <h4 className='text-xl block dark:text-white ml-10'>Hello 🌎! im Jonathan Picone and</h4>
          </div>
          <div className='ml-6'>
            <h2 className='text-6xl inline mt-auto dark:text-white font-["Righteous"]'>I enjoy developing <p className='text-mainpurple inline'>web applications</p>.</h2>
          </div>
        </div>
        <div className='w-max h-max relative'>
          <div className='border-2 border-mainpurple w-full absolute h-full bottom-3 right-3 rounded-[50%]'></div>
          <div className='border-2 border-mainpurple w-full absolute h-full bottom-3 left-3 rounded-[50%]'></div>
          <div className='border-2 border-mainpurple w-full absolute h-full -bottom-3 -left-3 rounded-[50%]'></div>
          <div className='border-2 border-mainpurple w-full absolute h-full -bottom-3 -right-3 rounded-[50%]'></div>
          <img src='/profile_yon.jpg' alt='Profile Picture' draggable='false' className='h-[240px] w-[240px] rounded-[50%] mx-auto z-10 relative' />
        </div>
      </article>
    </div>
    <div className='absolute bottom-4 left-1/2 flex justify-center items-center -translate-x-1/2 h-[40px] w-[25px]'>
      <Scroll />
    </div>
  </section>
}