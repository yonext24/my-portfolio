import React, { useContext } from 'react'
import { LanguageContext } from '../contexts/LanguageContext'
import { AiOutlineGithub } from 'react-icons/ai';
import Skill from "./Skill"
import { ImageSlider } from './ImageSlider';
import { DemoButton } from './DemoButton';
import { addModal } from 'react-modal-observer';
import { ModalExample } from './ModalExample.jsx';

export default function CurrentProject({ data }) {
  const { language } = useContext(LanguageContext)

  const demoProps = data.data.title === 'React Modal Observer' ? {
    as: 'button',
    onClick: () => {
      addModal(ModalExample)
    },
  } : {
    as: 'a',
    href: data.data.demo
  }
  // I know this is horrible, i hope nobody sees this

  return <article className='w-full bg-gradient-to-tl from-[rgb(230,230,230)] via-[rgba(255,255,255,.3)]
  dark:from-darkpurple border-2 border-mainpurple mx-auto grid grid-cols-[45%,auto] gap-x-4 rounded-sm py-6 px-6 
  max-[1180px]:grid-cols-none max-[1180px]:grid-rows-[auto,auto] '>
    <div className=''>
      <h3 className='font-[Righteous] text-5xl text-center text-black dark:text-white mb-3 min-[1180px]:hidden max-[530px]:text-3xl'>{data.data.title}</h3>
      <ImageSlider images={data.data.image} />
    </div>
    <div className='w-[55] flex flex-col justify-between pl-4'>
      <div className='min-h-[120px] mt-6'>
        <h3 className='font-[Righteous] text-4xl text-center text-black dark:text-white mb-3 max-[1180px]:hidden'>{data.data.title}</h3>
        <p className='text-lg text-[rgb(0,0,0,.9)] dark:text-[rgba(255,255,255,.7)] w-11/12 max-[1180px]:text-center max-[1180px]:mx-auto'>{data.data.description[language]}</p>
      </div>
      <div className='mt-auto flex gap-2 max-[1180px]:flex-col max-[680px]:mt-4'>
        <div className='flex gap-2 items-end justify-center'>
          {
            !data.noDemo &&
            <DemoButton {...demoProps}>
              Demo
            </DemoButton>
          }
          {
            !data.noGit &&
            <a className='rounded-lg bg-rose2 py-1 px-2 max-[1180px]:py-3 max-[1180px]:w-2/5 flex items-center justify-center w-max gap-x-2' href={data.data.github} target='_blank' >
              <AiOutlineGithub className='h-5 w-5' />
              Github
            </a>
          }
        </div>
        <div className='flex gap-2 justify-end flex-wrap-reverse w-full items-end max-[680px]:mt-4'>
          {
            data.data.skills.map(el => {
              return <Skill key={el} name={el} hasOpacity={true} />
            })
          }
        </div>
      </div>
    </div>
  </article>
}