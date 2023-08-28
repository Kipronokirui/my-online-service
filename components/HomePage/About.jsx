import React from 'react'
import { features } from './utils'

export default function About() {
  return (
      <div className={`py-20`}>
          <div>
              <div className='mb-4'>
                  <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
                      Get help with Study Questions from verified tutors
                  </h2>
                  <p className='text-gray-500 sm:text-xl dark:text-gray-400'>
                      Perceive these hallmarks that make our custom academic writing service truly unique!
                      Request pro academic help online with any type of homework in any subject.
                      Any citation style could be implemented.
                  </p>
              </div>
              <section className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
                  {features.map((feature, index) => (
                    <div key={index}>
                        <div className={`mb-2 w-16 h-16 rounded-full flex justify-center items-center ${
                              index === 0
                                ? 'bg-red-600'
                                : index === 1
                                ? 'bg-yellow-600'
                                : index === 2 
                                ? 'bg-green-600' 
                                : 'bg-blue-600' 
                              }
                          `}>
                            <div className={`w-12 h-12 rounded-full flex justify-center items-center ${
                                  index === 0 
                                  ? 'bg-red-400'
                                  : index === 1 
                                      ? 'bg-yellow-400'
                                      : index === 2
                                          ? 'bg-green-400'
                                          : 'bg-blue-400'
                                      
                                  }
                              `}>
                                <img
                                      src={feature.feature_icon}
                                      alt={feature.title}
                                />
                            </div>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">
                            {feature.title}
                        </h3>
                        <p className='text-gray-500 dark:text-gray-400'>
                            {feature.description}
                        </p>
                    </div>
                  ))}
              </section>
          </div>
      </div>
  )
}
