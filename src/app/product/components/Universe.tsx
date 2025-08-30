import React from 'react'

export default function Universe({img, desc}: {img: string, desc: string}) {
  return (
    <div className='w-[20vw] h-full text-sm text-gray-600 flex flex-col gap-4 items-center justify-center'>
        <img src={img} alt="" className='object-cover w-[12vw]'/>
        <p >{desc}</p>
    </div>
  )
}
