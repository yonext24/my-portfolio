import React, { useContext } from 'react'
import Scroll from './Scroll'
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineWhatsApp } from 'react-icons/ai'
import { LanguageContext } from '../contexts/LanguageContext'
import data from '../assets/data.json'

export default function WelcomeSection() {
  const { language } = useContext(LanguageContext)

  return <section className='w-full h-screen flex flex-col items-center relative'>
    <div className='w-4/5 max-w-4xl h-full mx-auto flex justify-center items-center'>
      <article className='grid grid-cols-[1fr_auto] h-[60%] bg-transparent place-content-center rounded-3xl p-5 pr-8 shadow-xl
       transition-[background-color,transform] duration-200 border-2 border-mainpurple backdrop-blur-[2px] hover:-translate-y-1'>
        <div className='flex flex-col justify-center'>
          <div>
            <div>
              <h4 className='text-xl block dark:text-white ml-10'>{data.data[language].presentation}</h4>
            </div>
            <div className='ml-6'>
              <h2 className='text-6xl inline mt-auto dark:text-white font-["Righteous"]'>{data.data[language].presentationPhrase} <p className='text-mainpurple inline'>{data.data[language].webApps}</p>.</h2>
            </div>
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
    <div className='text-mainpurple flex flex-col absolute left-6 top-1/2 -translate-y-1/2 justify-evenly h-1/3'>
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