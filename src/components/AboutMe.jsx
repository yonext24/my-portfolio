import data from '../assets/data.json';
import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext';
import ReactTypingEffect from 'react-typing-effect';
import useIntersectionObserver from '../hooks/useIntersectionObserver';


export default function AboutMe() {
  const { language } = useContext(LanguageContext)

  const {fromRef, intersected} = useIntersectionObserver( '-50%' )

  return <section ref={fromRef} id='aboutme' className='w-full h-[105vh] bg-white relative dark:bg-darkpurple cutted overflow-visible flex items-end'>
    <div className='h-3/4 w-1/2 dark:text-white z-10 ml-6 my-auto flex flex-col justify-center'>
      <h3 className='font-[Righteous] text-5xl mb-4 text-mainpurple'>
      <ReactTypingEffect
        text={["Full-stack", "Self-thaught"]}
        speed={150}
        eraseSpeed={150}
        eraseDelay={3000}
        typingDelay={500}
      />
      <p className='text-secondarypurple inline'> developer</p>
      </h3>
      <h4 className='text-xl dark:text-white break-words'>{data.data[language].aboutme}</h4>
    </div>
    <img src='/aboutmesvg.png' className={`h-4/5 absolute bottom-4 right-0 transition-[opacity,transform]
    duration-500 ${!intersected && 'opacity-0 translate-x-1/3'}`} alt='about-me' draggable='false' />
  </section>
}