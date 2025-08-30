import React from 'react'

export default function Accounts({title, desc}: {title: string, desc: string}) {
  return (
    <div className='border border-gray-300 rounded-sm hover:border-sky-600 space-y-4 px-2 py-8 w-[30%]'>
        <h5 className='text-xl text-gray-700 font-semibold'>{title}</h5>
        <p className='text-gray-600'>{desc}</p>
    </div>
  )
}
