import React from 'react'

export default function ({image, title, desc, link, styl}: {image: string, title: string, desc: string, link: string, styl: string}) {
  return (
    <div className={`flex flex-${styl} gap-32 items-center justify-center`}>
        <img src={image} alt={title} />
        <div className='w-[25vw] space-y-4'>
            <h4 className='text-2xl'>{title}</h4>
            <p>{desc}</p>
            <div className='space-x-4'>
                <a href="#">{link}</a>
                <a href="#">Learn more</a>
            </div>
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}
