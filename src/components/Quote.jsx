import React, { useContext } from 'react'
import data from '../assets/data.json'
import { LanguageContext } from '../contexts/LanguageContext'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function Quote() {
  const { language } = useContext(LanguageContext)
  const { intersected, fromRef } = useIntersectionObserver('-50%')

  return <section className={`w-full delay-200 flex justify-center items-center py-12 relative bg-[transparent] border-t-2 border-t-mainpurple`}>

    <div ref={fromRef} className={` w-11/12 md:w-3/5 after:rounded-3xl px-12 rounded-3xl bg-gradient-to-tl from-[rgb(234,234,234)] via-[rgb(244,244,244)]
     dark:from-darkpurple dark:via-darkpurple flex relative justify-center items-center after:content-[""]
      after:absolute after:top-3 after:left-3 after:border-2 after:border-mainpurple after:w-full after:h-full after:-z-10
      transition-[transform,opacity,background-color] duration-500 ${!intersected && 'translate-x-10 opacity-0'} `}>

      <h3 className='py-24 font-[Righteous] text-2xl dark:text-white'>"{data.data[language].phrase.quote}"</h3>
      <h4 className='absolute bottom-4 right-10 text-md dark:text-white'>{data.data[language].phrase.author}</h4>

    </div>

  </section>
}