import React from 'react'

export default function Button({text}: {text: string}) {
  return (
    <div className='bg-sky-600 px-10 py-2 cursor-pointer text-white rounded-sm hover:bg-black transition duration-200'>{text}</div>
  )
}
