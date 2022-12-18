import React from 'react' 

export default function CurrentProject ({ data }) {
  return <article className='w-full bg-gradient-to-tl from-[rgb(230,230,230)] via-[rgba(255,255,255,.3)]
  dark:from-darkpurple border-2 border-mainpurple mx-auto grid grid-cols-[45%,auto] gap-x-4 rounded-2xl py-6 px-6 '>
      <div className=''>
        <img draggable='false' className='w-full rounded-lg aspect-[16/9] dark:brightness-90' src={data.image} />
      </div>
      <div className='w-[55]'>
        <h3 className='font-[Righteous] text-4xl text-center text-black dark:text-white mb-3'>{data.title}</h3>
        <p className='text-lg text-[rgb(0,0,0,.9)] dark:text-[rgba(255,255,255,.7)] w-11/12 mx-auto'>{data.description}</p>
      </div>
  </article>
}