import React, { useContext } from 'react'
import { TfiWorld } from 'react-icons/tfi';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import Skill from './Skill';
import { LanguageContext } from '../contexts/LanguageContext';

export default function MyData() {
  const { language } = useContext(LanguageContext)

  return <section className='bg-white dark:bg-darkpurple border-2 border-y-mainpurple w-full flex py-14 items-start justify-evenly'>
    <div className='flex flex-col w-max pr-2'>
      <h3 className='dark:text-white font-["Righteous"] text-xl'>{language === 'es' ? 'Datos Personales' : 'Personal Data'}</h3>
      <p className='dark:text-white inline-block mt-3'><TfiWorld className='h-5 w-5 inline mr-2' />Lanús, Buenos Aires
        <span className='text-secondarypurple'> Argentina</span>
      </p>
      <p className='dark:text-white inline-block mt-3'><AiOutlinePhone className='h-5 w-5 inline mr-2' />
        <span className='text-secondarypurple'>+54 </span>
         1126665538</p>
      <p className='dark:text-white inline-block mt-3'><AiOutlineMail className='h-5 w-5 inline mr-2' />yonielkpo@
        <span className='text-secondarypurple'>gmail.com</span>
      </p>
    </div>

    <div className='flex w-max flex-col'>
      <h3 className='dark:text-white font-["Righteous"] text-xl'>{language === 'es' ? 'Lenguajes' : 'Languages'}</h3>
      <p className='dark:text-white inline-block mt-3'> Español <span className='text-secondarypurple'>Nativo</span>  </p>
      <p className='dark:text-white inline-block mt-3'> English <span className='text-secondarypurple'>Intermediate</span> </p>
    </div>

    <div className='flex flex-col w-[35%] max-w-[300px] h-full'>
      <h3 className='dark:text-white font-["Righteous"] text-xl'>{language === 'es' ? 'Habilidades' : 'Skills'}</h3>
      <div className='flex flex-wrap mt-2 gap-x-2 gap-y-1'>
        <Skill name='javascript' />
        <Skill name='html' />
        <Skill name='css' />
        <Skill name='react' />
        <Skill name='tailwind' />
        <Skill name='nodejs' />
        <Skill name='python' />
        <Skill name='responsive' />
        <Skill name='CRUD' />
      </div>
    </div>
  </section>
}