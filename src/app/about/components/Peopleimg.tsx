'use client'
import React, { useState } from 'react'
import Para from './Para'
import { IoIosArrowDown } from 'react-icons/io';
export default function Peopleimg({imgUrl, name, designation, bio}: {imgUrl: string, name: string, designation: string, bio: string}) {
  const [openBio, setOpenBio] = useState(false);
  const changeBio = () => {
    setOpenBio(!openBio);
  }
  return (
    <div className='h-full'>
        <img src={imgUrl} alt={name} className='rounded-full' />
        <div className='space-y-2'>
            <h5>{name}</h5>
            <h6 className='text-sm text-gray-600'>{designation}</h6>
            <div onClick={changeBio}>
              <div className='flex items-center justify-center gap-2 text-gray-600'>
                <p>Bio</p>
                <IoIosArrowDown />
              </div>
                {openBio && 
                  <Para text={`${bio}`} />
                }
            </div>
        </div>
    </div>
  )
}
