import React from 'react' 

export default function Skill ({ name }) {
  return <span className={`bg-darkpurple dark:bg-white text-white dark:text-darkpurple w-max px-2 py-1 block`}>
    {name}
  </span>
}