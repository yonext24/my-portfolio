import React, { useContext } from 'react'
import { TfiWorld } from 'react-icons/tfi';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import Skill from './Skill';
import { LanguageContext } from '../contexts/LanguageContext';

export default function MyData() {
  const { language } = useContext(LanguageContext)

  return <section className='bg-white dark:bg-darkpurple border-2 border-y-mainpurple w-full flex py-14 items-start justify-evenly
  max-[900px]:grid max-[900px]:grid-cols-[1fr_1fr] max-[900px]:gap-y-6 '>
    <div className='flex flex-col w-max pr-2 col-[1] row-[1] max-[900px]:mr-auto max-[900px]:ml-[25%] ml-4 max-[900px]:w-auto'>
      <h3 className='dark:text-white font-["Righteous"] text-xl'>{language === 'es' ? 'Datos Personales' : 'Personal Data'}</h3>
      <p className='dark:text-white inline-block mt-3'><TfiWorld className='h-5 w-5 inline mr-2' />Lanús, Buenos Aires
        <span className='text-secondarypurple'> Argentina</span>
      </p>
      <p className='dark:text-white inline-block mt-3'><AiOutlinePhone className='h-5 w-5 inline mr-2' />
        <span className='text-secondarypurple'>+54 </span>
         1126665538</p>
      <p className='dark:text-white inline-block mt-3 break-all'><AiOutlineMail className='h-5 w-5 inline mr-2' />yonielkpo@
        <span className='text-secondarypurple'>gmail.com</span>
      </p>
    </div>

    <div className='flex w-max flex-col col-[1] row-[2] max-[900px]:mr-auto max-[900px]:ml-[25%] ml-4'>
      <h3 className='dark:text-white font-["Righteous"] text-xl'>{language === 'es' ? 'Lenguajes' : 'Languages'}</h3>
      <p className='dark:text-white inline-block mt-3'> Español <span className='text-secondarypurple'>Nativo</span>  </p>
      <p className='dark:text-white inline-block mt-3'> English <span className='text-secondarypurple'>Intermediate</span> </p>
    </div>

    <div className='flex flex-col w-[35%] max-w-[300px] h-full col-[2] row-[1/3] max-[900px]:mx-auto max-[900px]:w-2/3 max-[660px]:ml-auto max-[660px]:mr-4  '>
      <h3 className='dark:text-white font-["Righteous"] text-xl'>{language === 'es' ? 'Habilidades' : 'Skills'}</h3>
      <div className='flex flex-wrap mt-2 gap-x-2 gap-y-1'>
        <Skill name='javascript' />
        <Skill name='typescript' />
        <Skill name='html' />
        <Skill name='css' />
        <Skill name='react' />
        <Skill name='tailwind' />
        <Skill name='nodejs' />
        <Skill name='python' />
        <Skill name='responsive' />
        <Skill name='CRUD' />
        <Skill name='Firebase' />
        <Skill name='SEO' />
      </div>
    </div>
  </section>
}