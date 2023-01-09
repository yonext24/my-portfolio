import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import { TfiWorld } from 'react-icons/tfi';
import { AiOutlineGithub } from 'react-icons/ai';
import Skill from "./Skill"

export default function CurrentProject({ data }) {
  console.log(data)
  const { language } = useContext(LanguageContext)

  return <article className='w-full bg-gradient-to-tl from-[rgb(230,230,230)] via-[rgba(255,255,255,.3)]
  dark:from-darkpurple border-2 border-mainpurple mx-auto grid grid-cols-[45%,auto] gap-x-4 rounded-2xl py-6 px-6 '>
    <div className=''>
      <img draggable='false' className='w-full rounded-lg aspect-[16/9] dark:brightness-90 object-cover' src={data.data.image} />
    </div>
    <div className='w-[55] flex flex-col justify-between pl-4'>
      <div>
        <h3 className='font-[Righteous] text-4xl text-center text-black dark:text-white mb-3'>{data.data.title}</h3>
        <p className='text-lg text-[rgb(0,0,0,.9)] dark:text-[rgba(255,255,255,.7)] w-11/12'>{data.data.description[language]}</p>
      </div>
      <div className='mt-auto flex gap-2'>
        <div className='flex gap-2 items-end'>
          <a className='rounded-lg bg-rose2 py-1 px-2 flex items-center w-max gap-x-2' href={data.data.demo} target='_blank' >
            <TfiWorld className='h-5 w-5' />
            Demo
          </a>
          {
            !data.noGit &&
            <a className='rounded-lg bg-rose2 py-1 px-2 flex items-center w-max gap-x-2' href={data.data.github} target='_blank' >
              <AiOutlineGithub className='h-5 w-5' />
              Github
            </a>
          }
        </div>
        <div className='flex flex-wrap gap-2 justify-center'>
          {
            data.data.skills.map(el => {
              return <Skill key={el} name={el} />
            })
          }
        </div>
      </div>
    </div>
  </article>
}