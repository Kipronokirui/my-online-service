import React from 'react'
import { QuestionsHero, QuestionsDetails } from '@/components/FAQs'

export default function Page() {
  return (
    <div>
      <div>
        <QuestionsHero />
      </div>
      <section className='container'>
        <div>
          <QuestionsDetails />
        </div>
      </section>
    </div>
    
  )
}
