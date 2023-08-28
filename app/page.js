import Image from 'next/image'
import { Hero, About, Steps, WhatWeOffer } from '@/components/HomePage'

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <div className={`container`}>
        <About />
      </div>
      <div className={`container`}>
        <Steps />
      </div>
      <div className='bg-gray-600'>
        <WhatWeOffer />
      </div>
    </main>
  )
}
