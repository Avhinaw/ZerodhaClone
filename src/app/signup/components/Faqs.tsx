"use client"
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';

export default function Faqs({ques, ans}: {ques: string, ans: string}) {
    const [openAns, setOpenAns] = useState(false);
    const handleQuestion = () => {
        setOpenAns(!openAns);
    }
  return (
    <div className='border-t border-gray-300 py-5 space-y-2'>
        <div onClick={handleQuestion} className='flex items-center justify-between cursor-pointer font-semibold text-gray-700'>
        <h4>{ques}</h4>
        <span><IoIosArrowDown /></span>
        </div>
        {openAns && <p>{ans}</p>}
    </div>
  )
}
