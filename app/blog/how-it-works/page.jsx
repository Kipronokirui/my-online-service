
import React from 'react'
import { HowHero, HowDetails } from '@/components/HowItWorks'

export default function Page() {
  return (
    <div>
      <div>
        <HowHero />
      </div>
      <section className='container'>
        <div>
          <HowDetails />
        </div>
      </section>
      </div>
  )
}
