"use client";
import React, { useState } from 'react'
import {FcClock} from 'react-icons/fc'

export default function QuestionDescription() {
    const [time, setTime] = useState("days")
    const onOptionChange = e => {
        setTime(e.target.value)
      }
  return (
      <div className='container bg-slate-200'>
          <section className='px-4'>
              <div>
                  <h1 className='text-blue-500 text-lg border-b-2 border-white py-2'>
                      Describe Your Question
                  </h1>
                  <div className='bg-blue-300 mt-2 rounded-lg'>
                      <section className='p-4'>
                          <h1 className='text-blue-950 text-lg border-b-2 border-white py-2'>
                              What you can expect:
                          </h1>
                          <div className='grid grid-cols-3 mx-4'>
                              <div>
                                  <small>
                                      A <span>high quality</span> explanation and answer within your time limit.
                                  </small>
                              </div>
                              <div>
                                  <small>
                                      <span>Quick responsive</span> communication
                                  </small>
                              </div>
                              <div>
                                  <small>
                                      <span>Original explanations and answers</span> with well cited resources
                                  </small>
                              </div>
                          </div>
                      </section>
                  </div>
              </div>
              <section className='py-2'>
                  <form>
                      <div className='mb-4'>
                          <div>
                              <label
                                  htmlFor='title'
                                  className="block text-lg font-medium text-gray-900">
                                  Question Title
                              </label>
                              <small>
                                  Try to summarize the
                                  question using 15 words or less
                              </small>
                              <input
                                  type="text"
                                  id="title"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                  placeholder="Question Title"
                                  required
                              />
                          </div>
                      </div>
                      <div className='mb-2'>
                          <div className='mb-2'>
                              <label
                                  htmlFor='description'
                                  className="block text-lg font-medium text-gray-900">
                                  Question Description
                              </label>
                              <small>
                                  The more specific your details are,
                                  the better help you will receive.
                              </small>
                          </div>
                          <div className='bg-blue-300 rounded-lg mb-2'>
                              <div className='p-2'>
                                  <small className='text-sm'>
                                      If  your question involves coding, make sure to specify additional information
                                      such as language version, compiler to be used, external libraries, etc
                                  </small>
                              </div>
                          </div>
                          <div>
                              <textarea
                                  type='text'
                                  id='description'
                                  rows={4}
                                  className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 `}
                                  placeholder="Brief Description about your question"
                                  required
                              >
                              </textarea>
                              <small>
                                  Character Count: <span className='font-bold'> 0</span>
                              </small>
                          </div>
                      </div>
                      <div className='mb-2 bg-blue-300 rounded-lg border-2 border-dotted border-blue-600'>
                          <section className='p-4 flex justify-start space-x-4'>
                              <div>
                                  First badge
                              </div>
                              <div>
                                  second badge
                              </div>
                          </section>
                      </div>
                      <div className='mb-2 border-b-2 border-white'>
                          <div className='mb-2'>
                              <h5 className="block text-lg font-medium text-gray-900">
                                  Delivery Time
                              </h5>
                              <small>
                                  Let us know when you`d like an explanation and answer delivered
                              </small>
                          </div>
                          <section className={`flex items-center space-x-2 mb-4`}>
                              <div className='flex'>
                                  <FcClock
                                      className={`w-10 h-10`}
                                  />
                              </div>
                              <div>
                                  <input
                                      type="number"
                                      id="price"
                                      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                                        rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-28 p-2.5
                                        `}
                                      placeholder='1'
                                  />
                              </div>
                              <div className='flex items-center'>
                                  <input
                                      id='days'
                                      type="radio"
                                      name="days"
                                      value={`days`}
                                      checked={time === "days"}
                                      onChange={onOptionChange}
                                      className={`w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 
                                        dark:focus:ring-blue-600 dark:focus:bg-blue-600
                                        dark:bg-gray-700 dark:border-gray-600`}
                                  />
                                  <label htmlFor='days' className='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                                      Days
                                  </label>
                              </div>
                              <div className='flex items-center'>
                                  <input
                                      id='hours'
                                      type="radio"
                                      name="hours"
                                      value={`hours`}
                                      checked={time === "hours"}
                                      onChange={onOptionChange}
                                      className={`w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 
                                          dark:focus:ring-blue-600 dark:focus:bg-blue-600
                                           dark:bg-gray-700 dark:border-gray-600`}
                                  />
                                  <label htmlFor='hours' className='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                                      Hours
                                  </label>
                              </div>
                          </section>
                      </div>
                      <section className='mb-2 border-b-2 border-white'>
                          <div className='flex items-center space-x-2 justify-center'>
                              <div>
                                  <button
                                      type="button"
                                      className={`text-white bg-blue-700 hover:bg-blue-800
                                      font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2
                                      focus:outline-none`}
                                  >
                                      Previous
                                  </button>
                              </div>
                              <div>
                                  <button
                                      type="button"
                                      className={`text-white bg-blue-700 hover:bg-blue-800 
                                      font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2
                                      focus:outline-none`}
                                  >
                                      Next
                                  </button>
                              </div>
                          </div>
                      </section>
                  </form>
              </section>
          </section>
      </div>
  )
}
