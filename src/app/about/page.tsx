import React from 'react'
import Para from './components/Para'
import People from './components/People'

export default function page() {
  return (
    <div className='w-[74vw] min-h-screen h-full m-auto'>
      <div className='border-b border-gray-200 h-[36vh] py-30 text-2xl text-center font-semibold text-gray-700'>
        <h2>We pioneered the discount broking model in India.</h2>
        <h2>Now, we are breaking ground with our technology.</h2>
      </div>
    <div className='w-[60vw] h-full text-lg m-auto flex gap-10 text-gray-700 py-24'>
      <div className='space-y-5'>
  <Para text="We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and 'Rodha', the Sanskrit word for barrier" />
  <Para text="Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India." />
<Para text=" Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes. " />
      </div>
      <div className='space-y-5'>
<Para text="In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors." />
<Para text="Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets." />
<Para text="And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies." />
      </div>
    </div>
    <People />
    </div>
  )
}
