import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

export default function Project({ data, parentSetState, noGit, noDemo }) {
  const handleProjectChange = () => {
    parentSetState({ data, noGit, noDemo })
  }

  const { language } = useContext(LanguageContext)

  return <article className='opacity-90 w-11/12 sm:w-9/12 min-[780px]:w-2/5 lg:w-1/3 relative group z-[5] hover:z-20 rounded-md min-w-[330px] aspect-[1280/700]'
    onClick={handleProjectChange}>

    <p className='text-center text-white z-20 absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 opacity-0 
    group-hover:opacity-100 transition-[filter] pointer-events-none'>{language === 'es' ? 'Click para ver arriba' : 'Click to preview'}</p>
    <div className='w-full h-full overflow-hidden rounded-lg'>
      <img src={data.image[0]} loading='lazy' fetchpriority='low' draggable='false' className='h-full w-full rounded-l-lg cursor-pointer group-hover:brightness-[.2]
    z-[5] transition-[transform,filter] dark:brightness-[.8] object-cover aspect-[1280/700] group-hover:scale-125 ' />
    </div>

    <aside className='bg-gradient-to-br from-rose2 to-blue2 absolute right-0 text-vertical text-center dark:text-white translate-x-2 z-30
  top-0 h-full w-1/5 rounded-r-lg min-[780px]:group-hover:translate-x-2/3 lg:group-hover:translate-x-full transition-transform cursor-pointer py-4 flex items-center text-md'>
      <span className='my-auto text-lg min-[780px]:text-sm'>{data.title}</span>
    </aside>
  </article>
}