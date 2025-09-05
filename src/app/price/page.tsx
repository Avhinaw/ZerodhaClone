import React from 'react'
import Price from './components/Price'

export default function page() {
  return (
    <div className='w-[74vw] min-h-screen h-full m-auto py-20'>
      <h2 className='text-center text-2xl font-semibold text-gray-700 py-3'>Charges</h2>
      <p className='text-center text-gray-400 text-lg'>List of all charges and taxes</p>
      <div className='flex gap-8 w-[90%] m-auto py-24'>
        <Price img='https://zerodha.com/static/images/pricing-eq.svg' title='Free equity delivery' desc='All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.' />
        <Price img='https://zerodha.com/static/images/other-trades.svg' title='Intraday and F&O trades' desc='Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.' />
        <Price img='https://zerodha.com/static/images/pricing-eq.svg' title='Free direct MF' desc='All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.' />
      </div>
        
    </div>
  )
}
