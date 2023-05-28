import React, { useContext } from 'react'
import Scroll from './Scroll'
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineWhatsApp } from 'react-icons/ai'
import { LanguageContext } from '../contexts/LanguageContext'
import data from '../assets/data.json'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function WelcomeSection() {
  const { language } = useContext(LanguageContext)

  const { fromRef, intersected } = useIntersectionObserver()

  return <section id='home' className='w-full h-screen flex flex-col items-center relative'>
    <div className='w-4/5 max-[1024px]:w-full max-[1024px]:max-w-[none] max-w-4xl h-full mx-auto flex justify-center items-center'>

      <article ref={fromRef} className={`grid grid-cols-[1fr_auto] max-[1024px]:grid-cols-none max-[1024px]:grid-rows-[auto,auto]
       max-[1024px]:max-h-[none] max-[1024px]:h-auto h-[60%] max-h-[400px] bg-transparent place-content-center rounded-3xl p-5 pr-8 shadow-xl
       transition-[transform,opacity] duration-500 border-2 border-mainpurple hover:-translate-y-1 max-[1024px]:px-0
       ${!intersected && 'opacity-0 translate-x-1/3'}`}>

        <div className='max-[1024px]:row-[2] flex flex-col justify-center'>
          <div>
            <div>
              <h4 className='text-xl block dark:text-white ml-10 max-[1024px]:text-center max-[1024px]:ml-0 max-[1024px]:mb-4'>{data.data[language].presentation}</h4>
            </div>
            <div className='ml-6 max-[1024px]:ml-0'>
              <h2 className='text-6xl inline-block mt-auto dark:text-white font-["Righteous"] max-[1024px]:text-center max-[650px]:text-5xl max-[1024px]:mb-3'>{data.data[language].presentationPhrase} <p className='text-mainpurple inline'>{data.data[language].webApps}</p>.</h2>
            </div>
          </div>
        </div>
        <div className='w-max h-max relative max-[1024px]:mx-auto max-[1024px]:mb-6'>
          <div className='border-2 border-mainpurple w-full absolute h-full bottom-3 right-3 rounded-[50%]'></div>
          <div className='border-2 border-mainpurple w-full absolute h-full bottom-3 left-3 rounded-[50%]'></div>
          <div className='border-2 border-mainpurple w-full absolute h-full -bottom-3 -left-3 rounded-[50%]'></div>
          <div className='border-2 border-mainpurple w-full absolute h-full -bottom-3 -right-3 rounded-[50%]'></div>
          <img src='/profile_yon.jpg' alt='Profile Picture' draggable='false' className='h-[240px] w-[240px] max-[400px]:h-[190px] max-[400px]:w-[190px] rounded-[50%] mx-auto z-10 relative' />
        </div>

        <div className='text-mainpurple flex mx-auto gap-x-2 min-[1024px]:hidden'>
          <a href='https://www.instagram.com/yoni_oc/' target='_blank' className='ml-2 group'  >
            <AiOutlineInstagram className='h-12 w-12 transition-[transform,background-color] group-hover:text-secondarypurple group-hover:scale-105' />
          </a>
          <a href='https://github.com/yonext24' target='_blank' className='ml-2 group'>
            <AiOutlineGithub className='h-11 w-11 pt-1 transition-[transform,background-color] group-hover:text-secondarypurple group-hover:scale-105' />
          </a>
          <a href='https://wa.me/1126665538' target='_blank' className='ml-2 group'  >
            <AiOutlineWhatsApp className='h-11 w-11 pt-1 transition-[transform,background-color] group-hover:text-secondarypurple group-hover:scale-105' />
          </a>
        </div>

      </article>
    </div>
    <div className='absolute bottom-4 left-1/2 flex justify-center items-center -translate-x-1/2 h-[40px] w-[25px] max-[1024px]:hidden'>
      <Scroll />
    </div>
    <div className='text-mainpurple flex flex-col absolute left-6 top-1/2 -translate-y-1/2 justify-evenly h-1/3 max-[1024px]:hidden'>
      <a href='https://www.instagram.com/yoni_oc/' target='_blank' className='ml-2 group'  >
        <AiOutlineInstagram className='h-12 w-12 transition-[transform,background-color] group-hover:text-secondarypurple group-hover:scale-105' />
      </a>
      <a href='https://github.com/yonext24' target='_blank' className='ml-2 group'>
        <AiOutlineGithub className='h-11 w-11 pt-1 transition-[transform,background-color] group-hover:text-secondarypurple group-hover:scale-105' />
      </a>
      <a href='https://wa.me/1126665538' target='_blank' className='ml-2 group'  >
        <AiOutlineWhatsApp className='h-11 w-11 pt-1 transition-[transform,background-color] group-hover:text-secondarypurple group-hover:scale-105' />
      </a>
    </div>
  </section>
}