import React, { useState } from 'react'
import CurrentProject from './CurrentProject'
import Project from './Project'
import data from '../assets/data.json'

export default function ProjectSection() {
  const [finalData, setFinalData] = useState(data.projects.shoes)

  return <section id='projects' className='w-full pt-6'>
    <div className='bg-gradient-to-tr from-rose to-blue w-4/5 mx-auto rounded-3xl backdrop-blur-[2px] py-12 px-6 flex flex-col'>
      <CurrentProject data={finalData} />
      <div className='flex flex-wrap gap-x-14 gap-y-8 mt-6 justify-center'>
        <Project data={data.projects.shoes} parentSetState={setFinalData} />
        <Project data={data.projects.pokeapi} parentSetState={setFinalData} />
        <Project data={data.projects.comments} parentSetState={setFinalData} />
        <Project data={data.projects.landingpage} parentSetState={setFinalData} />
        <Project data={data.projects.cardspage} parentSetState={setFinalData} />
      </div>
    </div>
  </section>
}