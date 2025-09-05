import React from 'react'
import Button from '../Homepage/components/Button'
import Options from './components/Options'
import Benefits from './components/Benefits'
import Accounts from './components/Accounts'
import Faqs from './components/Faqs'
import Open from '../Homepage/components/Open'

export default function page() {
  return (
    <div className='w-[74vw] min-h-screen h-full m-auto py-20'>
        <h1 className='text-2xl text-center font-semibold text-gray-700 mb-4'>Open a free demat and trading account online</h1>
        <h3 className='text-gray-600 text-center'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h3>
        <div className='flex gap-10 items-center justify-center'>
          <img src="https://zerodha.com/static/images/account_open.svg" alt="Account_open" className='w-1/2' />
          <div className='space-y-2'>
            <h3 className='text-2xl text-gray-700 font-semibold'>Signup now</h3>
            <h4 className='text-gray-600'> Or track your existing application</h4>
            <div className='h-10 border border-gray-300 flex items-center text-xl gap-2'>
              <img src="https://zerodha.com/static/images/india-flag.svg" alt="india" />
              <p>+91</p>
              <input type="number" placeholder='Enter your mobile number' className='outline-none border-l' />
            </div>
            <div className='flex items-center justify-start'>
              <Button text='Get OTP'/>
            </div>
          </div>
        </div>
        <div className='py-20'>
          <h3 className='text-2xl font-semibold text-center text-gray-700'>Investment options with Zerodha demat account</h3>
          <div className='grid grid-cols-2 gap-20 py-16'>
            <Options img='https://zerodha.com/static/images/stocks-acop.svg' title='Stocks' desc='Invest in all exchange-listed securities' />
            <Options img='https://zerodha.com/static/images/mf-acop.svg' title='Mutual funds' desc='Invest in commission-free direct mutual funds' />
            <Options img='https://zerodha.com/static/images/ipo-acop.svg' title='IPO' desc='Apply to the latest IPOs instantly via UPI' />
            <Options img='https://zerodha.com/static/images/fo-acop.svg' title='Futures & options' desc='Hedge and mitigate market risk through simplified F&O trading' />
          </div>
          <div className='w-1/2 m-auto flex items-center justify-center'>
          <Button text='Explore Investments' />
          </div>
        </div>
        <div className='space-y-10 w-full'>
          <h3 className='text-center text-2xl font-semibold text-gray-700'>Steps to open a demat account with Zerodha</h3>
          <div className='flex gap-12 items-center justify-center'>
            <img src="https://zerodha.com/static/images/steps-acop.svg" alt="Opening" />
            <div className='space-y-2 w-1/3'>
              <div className='flex gap-5 text-lg text-gray-700 py-4 border-b border-gray-300'>
                <p className='border px-1 py-[0.1px] rounded-full border-gray-300'>01</p>
                <h4 className='font-semibold'>Enter the requested details</h4>
              </div>
              <div className='flex gap-5 text-lg text-gray-700 py-4 border-b border-gray-300'>
                <p className='border px-1 py-[0.1px] rounded-full border-gray-300'>02</p>
                <h4 className='font-semibold'>Complete e-sign & verification</h4>
              </div>
              <div className='flex gap-5 text-lg text-gray-700 py-4'>
                <p className='border px-1 py-[0.1px] rounded-full border-gray-300'>01</p>
                <h4 className='font-semibold'>Start investing!</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center h-full gap-20 pt-32'>
          <div className='space-y-4'>
            <img src="https://zerodha.com/static/images/acop-benefits.svg" alt="benefits" className='w-full' />
            <h4 className='text-xl font-semibold text-gray-700'>Benefits of opening a Zerodha demat account</h4>
          </div>
          <div className='space-y-7 w-[45%]'>
            <Benefits title='Unbeatable pricing' desc='Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.' />
            <Benefits title='Best investing experience' desc='Simple and intuitive trading platform with an easy-to-understand user interface.' />
            <Benefits title='No spam or gimmicks' desc='Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.' />
            <Benefits title='The Zerodha universe' desc='More than just an app — gain free access to the entire ecosystem of our partner products.' />
          </div>
        </div>
        <div className='py-24'>
          <h3 className='text-center text-2xl font-semibold text-gray-700'>Explore different account types</h3>
          <div className='flex flex-wrap gap-10 py-10'>
            <Accounts title='Individual Account' desc='Invest in equity, mutual funds and derivatives' />
            <Accounts title='HUF Account' desc='Make tax-efficient investments for your family' />
            <Accounts title='NRI Account' desc='Invest in equity, mutual funds, debentures, and more' />
            <Accounts title='Minor Account' desc='Teach your little ones about money & invest for their future with them' />
            <Accounts title='Corporate / LLP/ Partnership' desc='Manage your business surplus and investments easily' />
          </div>
        </div>
          <div className='space-y-8'>
            <h3 className='text-start font-semibold text-2xl text-gray-700'>FAQs</h3>
            <div>
              <Faqs ques='What is a Zerodha account?' ans='A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.' />
              <Faqs ques='What documents are required to open a demat account?' ans='

The following documents are required to open a Zerodha account online:

    PAN number
    Aadhaar Card (Linked with a phone number for OTP verification)
    Cancelled cheque or bank account statement (To link your bank account)
    Income proof (Required only if you wish to trade in Futures & options)

' />
              <Faqs ques='Is Zerodha account opening free?' ans='' />
              <Faqs ques='Are there any maintenance charges for a demat account?' ans='Yes, It is completely free.' />
              <Faqs ques='Can I open a demat account without a bank account?' ans="To open a demat account, you must have a bank account in your name. If UPI verification is completed successfully, no proof of bank is needed. However, if bank verification fails, you'll need to provide either a cancelled cheque or a bank statement to link your bank account to Zerodha." />
            </div>
          </div>
          <Open />
        </div>
  )
}
