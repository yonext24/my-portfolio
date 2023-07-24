import React, { useContext, useState } from 'react'
import Scroll from './Scroll'
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineWhatsApp } from 'react-icons/ai'
import { LanguageContext } from '../contexts/LanguageContext'
import data from '../assets/data.json'

export default function WelcomeSection() {
  const [rotation, setRotation] = useState({
    x: 0,
    y: 0
  })
  const { language } = useContext(LanguageContext)

  const handleMouseMove = e => {
    const { width, height } = e.target.getBoundingClientRect()
    const halfWidth = width / 2
    const halfHeight = height / 2

    const { offsetX, offsetY } = e.nativeEvent
    const rotationX = ((offsetX - halfWidth) / halfWidth) * 11
    const rotationY = ((offsetY - halfHeight) / halfHeight) * 11
    setRotation({ x: rotationX, y: rotationY })
  }

  return <section id='home' className='w-full h-[110vh] sm:h-screen py-4 flex flex-col items-center relative px-1 min-[1024px]:px-12'>
    <div className='w-full max-w-[950px] h-full mx-auto flex justify-center items-center'>

      <article className={`w-full grid md:grid-cols-[1fr_auto] gap-x-4 [text-wrap:balance] grid-cols-none grid-rows-[auto,auto] md:grid-rows-none dark:[backdrop-filter:sepia(1)_hue-rotate(221deg)_saturate(10)]
       max-[700px]:max-h-[none] max-[700px]:h-auto bg-transparent place-content-center rounded-3xl md:px-4 md:py-14 px-4 py-4 bg-gradient-to-tr from-rose/10 via-rose/20 to-blue dark:bg-none
       transition-[transform,opacity] duration-75 border-2 border-mainpurple overflow-hidden relative [perspective:1000px]`} onMouseMove={handleMouseMove} onMouseLeave={() => setRotation({ x: 0, y: 0 })}
        style={{ transform: `rotateX(${rotation.y}deg) rotateY(${rotation.x}deg)`, transition: rotation.x === 0 && rotation.y === 0 ? 'transform .2s ease-in' : '' }}>

        <div className='row-[2] md:row-[1] flex flex-col justify-center pointer-events-none'>
          <div>
            <div>
              <h4 className='text-xl block dark:text-white ml-10 max-[1024px]:text-center max-[1024px]:ml-0 max-[1024px]:mb-4'>{data.data[language].presentation}</h4>
            </div>
            <div className='ml-6 max-[1024px]:ml-0'>
              <h2 className='inline-block mt-auto dark:text-white font-["Righteous"] max-[1024px]:text-center text-5xl md:text-6xl max-[1024px]:mb-3'>{data.data[language].presentationPhrase} <p className='text-secondarypurple inline'>{data.data[language].webApps}</p>.</h2>
            </div>
          </div>
        </div>
        <div className='w-max h-max relative max-[1024px]:mx-auto max-[1024px]:mb-6 pointer-events-none'>
          <div className='border-2 border-mainpurple w-full absolute h-full bottom-3 right-3 rounded-[50%]'></div>
          <div className='border-2 border-mainpurple w-full absolute h-full bottom-3 left-3 rounded-[50%]'></div>
          <div className='border-2 border-mainpurple w-full absolute h-full -bottom-3 -left-3 rounded-[50%]'></div>
          <div className='border-2 border-mainpurple w-full absolute h-full -bottom-3 -right-3 rounded-[50%]'></div>
          <img src='/profile.png' height={240} width={240} alt='Profile Picture' draggable='false' className='h-[240px] w-[240px] max-[400px]:h-[190px] max-[400px]:w-[190px] rounded-[50%] mx-auto z-10 relative' />
        </div>

      </article>
    </div>
    <div className='absolute bottom-4 left-1/2 flex justify-center items-center -translate-x-1/2 h-[40px] w-[25px] max-[1024px]:hidden'>
      <Scroll />
    </div>
    <div className='text-[rgb(0,0,0)] dark:text-white flex flex-row left-1/2 absolute bottom-0 h-auto -translate-x-1/2 sm:h-48 sm:flex-col sm:left-6 sm:top-1/2 sm:-translate-y-1/2 justify-evenly md:max-xl:flex-row
     md:max-xl:left-1/2 md:max-xl:h-12 md:max-xl:w-48 md:max-xl:top-[15%] md:max-xl:-translate-x-1/2 '>
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
  </section >
}