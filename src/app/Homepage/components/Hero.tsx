import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='w-[55%] h-screen space-y-5 m-auto text-center'>
        <div className='h-[60%] py-20'>
            <img className='w-full' src="https://zerodha.com/static/images/landing.png" alt="static" />
        </div>
        <div className='space-y-2 mb-10'>
            <h2 className='font-semi-bold text-3xl'>Invest in everything</h2>
            <h3>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</h3>
        </div>
        <div className='w-fit m-auto'>
            <Button text='Signup for free' />
        </div>
    </div>
  )
}
