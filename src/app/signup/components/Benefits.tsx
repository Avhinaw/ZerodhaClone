import React from 'react'

export default function Benefits({title, desc}: {title: string, desc: string}) {
  return (
    <div className='space-y-4'>
        <h4 className='text-xl font-semibold text-gray-700'>{title}</h4>
        <p className='text-gray-600'>{desc}</p>
    </div>
  )
}
