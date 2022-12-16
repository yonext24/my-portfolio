import React from 'react'

export default function Project() {
  return <article className='opacity-90 w-1/3 relative group -z-10'>
    
    <p className='text-center text-white z-20 absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 opacity-0 
    group-hover:opacity-100 transition-[filter] pointer-events-none'>Click to see upthere</p>
    
    <img src='shoespage.png' draggable='false' className='aspect-video rounded-l-lg cursor-pointer group-hover:brightness-[.2] transition-[filter]' />
    
    <aside className='bg-mainpurple absolute right-0 text-vertical text-center dark:text-white translate-x-2 z-30
  top-0 h-full w-1/5 rounded-r-lg group-hover:translate-x-full transition-transform cursor-pointer py-4 flex items-center'>
      Shoes E-Commerce
    
    </aside>
  </article>
}