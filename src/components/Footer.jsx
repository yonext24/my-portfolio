import React from 'react'

export default function Footer() {
  return <footer className='py-12 bg-white dark:bg-darkpurple mt-12 w-full relative flex justify-center items-center'>
    <span className='dark:text-white'>Made with love by Jonathan Picone</span>
    <span className='absolute bottom-0 right-2 dark:text-white text-sm'>The background was provided by
      <a href='https://www.svgbackgrounds.com/' target='_blank' className='inline text-blue2'> svgbackgrounds.com</a></span>
  </footer>
}