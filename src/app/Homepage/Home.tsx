import React from 'react'
import Hero from './components/Hero'
import Trust from './components/Trust'
import PressLogo from './components/PressLogo'
import Pricing from './components/Pricing'
import Versity from './components/Versity'
import Open from './components/Open'

export default function Home() {
  return (
    <div className='w-full h-full'>
        <Hero />
        <Trust />
        <PressLogo />
        <Pricing />
        <Versity />
        <Open />
    </div>
  )
}
