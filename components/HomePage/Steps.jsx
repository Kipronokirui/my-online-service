import React from 'react'
import Link from 'next/link'
import { steps } from './utils'

export default function Steps() {
  return (
      <div className='pb-16'>
          <div className='text-center mb-6'>
              <h1 className='mx-auto max-w-2xl mb-2 text-xl font-extrabold tracking-tight leading-none md:text-3xl dark:text-white'>
              ORDER ACADEMIC WRITING IN 4 QUICK STEPS
              </h1>
              <hr className='mx-auto w-16 border-t-4 border-blue-500'/>
              <p className='mx-auto font-light text-gray-500 md:text-lg lg:text-xl'>
                  It's easy and agile to confect orders on our academic writing website.
              </p>
          </div>
          <section className='mb-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              {steps.map((step, index) => (
                <div key={index}>
                    <h4 className={`mb-3 pb-3 font-semibold text-${step.color}`}>
                        <span className='border-b-2 border-black'>
                            STEP {step.step_no}
                        </span>
                    </h4>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">
                        {step.title}
                    </h3>
                    <p className='text-gray-500 dark:text-gray-400'>
                        {step.description}
                    </p>
                </div>
              ))}
          </section>
          <div className="flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <Link href="#">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 mx-2">
                        Order Now
                    </button>
                </Link>
                <div className="flex-grow border-t border-gray-300"></div>
          </div>
          
      </div>
  )
}
