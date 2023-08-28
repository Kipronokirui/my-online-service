import React from 'react'
import { PricingHero, PricingDetails } from '@/components/pricing'

export default function Page() {
  return (
    <div>
      <div>
        <PricingHero />
      </div>
      <section className='container'>
        <div>
          <PricingDetails />
        </div>
      </section>
    </div>
  )
}
