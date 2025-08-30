import React from 'react'

export default function Trust() {
  return (
    <div className='w-[70%] h-[90vh] flex gap-4 m-auto'>
        <div className='flex flex-col w-[82%] gap-4'>
            <h3 className='font-semibold text-2xl'>Trust with confidence</h3>
            <div className='space-y-2'>
                <h4 className='text-lg font-semibold'> Customer-first always </h4>
                <p className='text-gray-600 text-lg'> That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India. </p>
            </div>
            <div className='space-y-2'>
                <h4 className='text-lg font-semibold'>No spam or gimmicks</h4>
                <p className='text-gray-600 text-lg'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
            </div>
            <div className='space-y-2'>
                <h4 className='text-lg font-semibold'>The Zerodha universe</h4>
                <p className='text-gray-600 text-lg'> Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
            </div>
            <div className='space-y-2'>
                <h4 className='text-lg font-semibold'>Do better with money</h4>
                <p className='text-gray-600 text-lg'> With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
        </div>
        <div className='w-full h-full'>
            <img className='h-[80%] w-[100%] object-cover' src="https://zerodha.com/static/images/ecosystem.png" alt="ecosystem" />
        </div>
    </div>
  )
}
