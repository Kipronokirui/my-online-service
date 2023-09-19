import React from 'react'
import Common from '@/components/OrderForm/Common'
import QuestionDescription from '@/components/OrderForm/QuestionDescription'

export default function page() {
  return (
    <div>
      <Common />
      <section className={`bg-green-300`}>
        <QuestionDescription />
      </section>
    </div>
  )
}
