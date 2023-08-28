import React from 'react'
import { steps } from './utils'

export default function HowDetails() {
  return (
      <div>
          <div>
                <h3 className="mt-2 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                    How it <span className="text-indigo-600">Works?</span>
                </h3>
              <p className='mb-2 font-light text-black md:text-lg lg:text-lg'>
                  Ordering an essay, article or research paper has never been easier.
                  It only takes a few minutes to place an order on our website, and your
                  request immediately goes to the most
                  suitable writer who knows the discipline and has years of experience in school writing.
              </p>
          </div>
          <section>
              <div >
                  <div>
                      <ul className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-4'>
                      {steps.map((step, index) => (
                            <li className="text-left mb-8" key={index}>
                                <div className="flex flex-row items-start">
                                    <div className="flex flex-col items-center justify-center mr-3">
                                        <div
                                            className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                            {step.step_number}
                                        </div>
                                        {/* <span className="text-gray-500">STEP</span> */}
                                    </div>
                                    <div className="bg-gray-100 p-5 pb-10 ">
                                          <h4 className="text-lg leading-6 font-semibold text-gray-900">
                                              {step.title}
                                          </h4>
                                            <p className="mt-2 text-base leading-6 text-gray-500">
                                            {step.description}
                                            </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                      </ul>
                  </div>
              </div>
          </section>
      </div>
  )
}
