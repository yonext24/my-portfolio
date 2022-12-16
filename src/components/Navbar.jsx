import React, { useEffect, useState } from 'react'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false)

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

  const {isInViewPort, fromRef} = useIntersectionObserver()
  

  console.log(isInViewPort)
  return <>
    <div className='w-full absolute top-0 left-0' ref={fromRef}></div>
    <nav className={`w-full fixed top-0 left-0 h-16 dark:text-white z-50 bg-[transparent] transition-all`}>
      <div className={`flex justify-between w-4/5 mx-auto h-full bg-white dark:bg-darkpurple rounded-lg px-6 shadow-md transition-[background-color,transform]
       dark:shadow-md dark:shadow-[rgb(15,15,15)] duration-300
       ${isInViewPort ? 'shadow-none bg-[rgba(255,255,255,.4)] dark:bg-[rgba(14,5,15,.01)] backdrop-blur-[1px] -translate-y-1' : ''}`} >
        <div className='my-auto'>
          <button className='rounded-[50%] w-12 h-12 cursor-pointer shadow-md flex justify-center items-center active:border-b active:border-l
        active:-translate-x-[1px] active:translate-y-[1px] dark:bg-[black] transition-colors duration-300'
            onClick={handleThemeChange}>
            {
              isDarkMode ? <HiOutlineSun className='h-6 w-6 dark:text-[white]' />
                : <HiOutlineMoon className='h-6 w-6' />
            }
          </button>
        </div>
        <div className='flex gap-6 h-4/5 justify-center my-auto'>
          <button>Inicio</button>
          <button>About Me</button>
          <button>Proyects</button>
        </div>

      </div>
    </nav>
  </>
}