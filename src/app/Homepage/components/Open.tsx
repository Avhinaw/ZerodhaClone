import React from 'react'
import Button from './Button'

export default function Open() {
  return (
    <div className='space-y-4 h-[40vh] w-[60%] m-auto flex flex-col items-center justify-center'>
        <h3 className='text-xl font-semibold'>Open a Zerodha account</h3>
        <p className='text-gray-600 text-lg'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <Button text='Signup for free' />
    </div>
  )
}
