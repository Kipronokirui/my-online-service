import React from 'react'
import { Hero, ServicesIntro } from '@/components/services'

export default function Page() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <section className='container'> 
        <div>
          <ServicesIntro />
        </div>
      </section>
    </div>
  )
}
