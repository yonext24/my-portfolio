import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'

export default function Project({ data, parentSetState, noGit }) {
  const handleProjectChange = () => {
    parentSetState({data, noGit})
  }

  const {language} = useContext(LanguageContext)

  return <article className='opacity-90 w-1/3 relative group z-[5] hover:z-20'
  onClick={handleProjectChange}>
    
    <p className='text-center text-white z-20 absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 opacity-0 
    group-hover:opacity-100 transition-[filter] pointer-events-none'>{language === 'es' ? 'Click para ver arriba' : 'Click to preview'}</p>
    
    <img src={data.image} draggable='false' className='aspect-video rounded-l-lg cursor-pointer group-hover:brightness-[.2]
    z-[5] transition-[filter] dark:brightness-[.8] object-cover' />
    
    <aside className='bg-gradient-to-br from-rose2 to-blue2 absolute right-0 text-vertical text-center dark:text-white translate-x-2 z-30
  top-0 h-full w-1/5 rounded-r-lg group-hover:translate-x-full transition-transform cursor-pointer py-4 flex items-center text-md'>
      <span className='my-auto'>{data.title}</span>    
    </aside>
  </article>
}