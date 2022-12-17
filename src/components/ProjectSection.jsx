import React, { useState } from 'react'
import CurrentProject from './CurrentProject'
import Project from './Project'
import data from '../assets/data.json'

export default function ProjectSection() {
  const [finalData, setFinalData] = useState(data.shoes)

  return <section className='w-full pt-6'>
    <div className='bg-gradient-to-tr from-rose to-blue w-4/5 mx-auto rounded-3xl backdrop-blur-[2px] py-12 px-6 flex flex-col'>
      <CurrentProject data={finalData} />
      <div className='flex flex-wrap gap-x-14 gap-y-8 mt-6 justify-center'>
        <Project data={data.shoes} parentSetState={setFinalData} />
        <Project data={data.pokeapi} parentSetState={setFinalData} />
        <Project data={data.comments} parentSetState={setFinalData} />
        <Project data={data.landingpage} parentSetState={setFinalData} />
        <Project data={data.cardspage} parentSetState={setFinalData} />
      </div>
    </div>
  </section>
}