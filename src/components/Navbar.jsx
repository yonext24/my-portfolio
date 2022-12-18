import React, { useContext, useEffect, useState } from 'react'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { HiOutlineLanguage } from 'react-icons/hi2';
import { LanguageContext } from '../contexts/LanguageContext';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const { language, setLanguage } = useContext(LanguageContext)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setIsDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDarkMode(false)
    }
  }, [isDarkMode])

  const handleThemeChange = () => {
    if (isDarkMode) {
      localStorage.theme = 'light'
      setIsDarkMode(false)
    }
    else {
      localStorage.theme = 'dark'
      setIsDarkMode(true)
    }
  }
  const handleLangChange = () => {
    language === 'es' ? setLanguage('en') : setLanguage('es')
  }

  const { isInViewPort, fromRef } = useIntersectionObserver()


  return <>
    <div className='w-full absolute top-0 left-0' ref={fromRef}></div>
    <nav className={`w-full fixed top-0 left-0 h-16 dark:text-white z-50 bg-[transparent] transition-all`}>
      <div className={`flex justify-between w-4/5 mx-auto h-full bg-white dark:bg-darkpurple rounded-lg px-6 shadow-md transition-[background-color,transform]
       dark:shadow-md dark:shadow-[rgb(15,15,15)] duration-300
       ${isInViewPort ? 'shadow-none bg-[rgba(255,255,255,.4)] dark:bg-[rgba(14,5,15,.01)] backdrop-blur-[1px] -translate-y-1' : ''}`} >
        <div className='my-auto flex gap-x-3'>
          <button className='rounded-[50%] w-12 h-12 cursor-pointer shadow-md flex justify-center items-center active:border-b active:border-l
        active:-translate-x-[1px] active:translate-y-[1px] dark:bg-[black] transition-colors duration-300'
            onClick={handleThemeChange}>
            {
              isDarkMode ? <HiOutlineSun className='h-6 w-6 dark:text-[white]' />
                : <HiOutlineMoon className='h-6 w-6' />
            }
          </button>
          <button className='rounded-[50%] w-12 h-12 cursor-pointer shadow-md flex justify-center items-center active:border-b active:border-l
        active:-translate-x-[1px] active:translate-y-[1px] dark:bg-[black] transition-colors duration-300'
            onClick={handleLangChange}>
            <HiOutlineLanguage className='h-6 w-6' />
          </button>
          <span className='text-md text-mainpurple font-bold my-auto uppercase'>{language}</span>
        </div>
        <div className='flex gap-6 h-4/5 justify-center my-auto pt-[4px]'>
          <button className='group'>
            <div className='border-l-4 border-b-4 pl-[2px] border-[transparent] group-hover:border-mainpurple transition-colors'>
              <div className='group-hover:translate-x-[4px] group-hover:-translate-y-[4px] transition-transform'>
                {language === 'es' ? 'Inicio' : 'Start'}
              </div>
            </div>
          </button>
          <button className='group'>
            <div className='border-l-4 border-b-4 pl-[2px] border-[transparent] group-hover:border-mainpurple transition-colors'>
              <div className='group-hover:translate-x-[4px] group-hover:-translate-y-[4px] transition-transform'>
              {language === 'es' ? 'Sobre Mi' : 'About Me'}
              </div>
            </div>
          </button>
          <button className='group'>
            <div className='border-l-4 border-b-4 pl-[2px] border-[transparent] group-hover:border-mainpurple transition-colors'>
              <div className='group-hover:translate-x-[4px] group-hover:-translate-y-[4px] transition-transform'>
              {language === 'es' ? 'Proyectos' : 'Projects'}
              </div>
            </div>
          </button>
        </div>

      </div>
    </nav>
  </>
}