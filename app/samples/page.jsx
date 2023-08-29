import React from 'react'
import { SamplesHero, SamplesDetails } from '@/components/samples'

export default function Page() {
  return (
    <div>
      <div>
        <SamplesHero />
      </div>
      <section className='container'>
        <div>
          <SamplesDetails />
        </div>
      </section>
    </div>
  )
}
