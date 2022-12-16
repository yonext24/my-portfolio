import React from 'react'
import CurrentProject from './CurrentProject'
import Project from './Project'

export default function ProjectSection() {
  return <section className='w-full pt-6'>
    <div className='bg-gradient-to-tr from-rose to-blue w-4/5 mx-auto rounded-3xl backdrop-blur-[2px] py-12 px-6 flex flex-col'>
      <CurrentProject />
      <div className='flex flex-wrap gap-x-8 gap-y-8 mt-6 justify-center'>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  </section>
}