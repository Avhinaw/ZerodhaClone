import React from 'react'

export default function Versity() {
  return (
    <div className='h-[50vh] w-[70%] m-auto flex gap-15 items-center'>
        <div>
            <img src="https://zerodha.com/static/images/index-education.svg" alt="versity" />
        </div>
        <div className='space-y-8 w-1/2'>
            <h3 className='text-xl font-semibold'>Free and open market education</h3>
            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href="#">Varsity</a>
            <p>
            TradingQ&A, the most active trading and investment community in India for all your market related queries.
            </p>
            <a href="#">TradingQ&A</a>
        </div>
    </div>
  )
}
