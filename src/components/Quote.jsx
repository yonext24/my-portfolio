import React from 'react'

export default function Quote() {
  const quotes = [
    { text: 'Vida antes que muerte, viaje antes que destino.', author: 'Brandon Sanderson' }
  ]

  return <section className='w-full flex justify-center items-center py-12 relative bg-[transparent] border-t-2 border-t-mainpurple'>
    <div className='w-3/5 after:rounded-3xl rounded-3xl bg-gradient-to-tl from-[rgb(234,234,234)] via-[rgb(244,244,244)]
     dark:from-darkpurple dark:via-darkpurple flex relative justify-center items-center transition-colors after:content-[""]
      after:absolute after:top-3 after:left-3 after:border-2 after:border-mainpurple after:w-full after:h-full after:-z-10 '>
      <h3 className='py-24 font-[Righteous] text-2xl dark:text-white'>"{quotes[0].text}"</h3>
      <h4 className='absolute bottom-4 right-10 text-md dark:text-white'>{quotes[0].author}</h4>
    </div>

  </section>
}