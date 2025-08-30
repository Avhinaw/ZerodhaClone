import React from 'react'

export default function Options({img, title, desc}: {img: string, title: string, desc: string}) {
  return (
    <div className='flex gap-8 items-center justify-center'>
        <img src={img} alt={title} />
        <div className='w-[48%]'>
            <h5 className='text-lg text-gray-700'>{title}</h5>
            <p className='text-gray-600'>{desc}</p>
        </div>
    </div>
  )
}
