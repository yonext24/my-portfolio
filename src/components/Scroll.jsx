import React from 'react' 

export default function Scroll () {
  return <span className='w-[25px] h-[40px] rounded-2xl border-2 bg-[transparent] border-secondarypurple relative overflow-hidden after:content-[""] after:w-[5px]
  after:h-[5px] after:absolute after:top-[7px] after:left-[50%] after:-translate-x-1/2 after:bg-secondarypurple after:rounded-full after:animate-[scroll_1.9s_linear_infinite]'>
  </span>
}