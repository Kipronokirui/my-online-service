import React from 'react'
import { samples } from './utils'
import SampleWorks from './SampleWorks'

export default function SamplesDetails() {
  return (
      <div>
          <section>
              <div>
                  <p className='mb-2 font-light text-black md:text-lg lg:text-lg'>
                    Every project we are working on requires an individual approach.
                    We decided to provide you with a variety of articles and papers
                    of different levels of complexity to help you set your expectations.
                    Our goal is to assign each paper request to a writer who specializes
                    in the subject matter and can do an extensive research.
                  </p>
                  <p className='mb-2 font-light text-black md:text-lg lg:text-lg'>
                    The articles presented here were created only for the display purposes and were not
                    sent to customers as final products. We will never publish an article sent to a
                    customer, unless the customer refuses to accept it. In that case, we own the rights
                    to the text and can display it publicly.
                  </p>
              </div>
          </section>
          <section className='flex justify-center items-center'>
              <SampleWorks />
          </section>
      </div>
  )
}
