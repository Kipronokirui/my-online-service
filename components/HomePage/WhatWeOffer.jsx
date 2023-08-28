import Link from 'next/link';
import React from 'react'
import { whatWeOffer } from './utils';
import { FaBeer } from 'react-icons/fa';

export default function WhatWeOffer() {
  return (
      <div className='container py-8'>
          <section className='grid grid-cols-1 lg:grid-cols-6 gap-4'>
              <div className='col-span-2'>
                  <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                      <div className='p-5'>
                          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                              What We Offer
                          </h5>
                          <p className='mb-3 font-normal text-gray-700'>
                              We offer a wide range of services at TopTutors.
                          </p>
                          <div>
                              <img 
                                  src={`/images/tutor1.jpg`}
                                  alt={`Image`}
                                  className={`rounded-lg w-full`}
                              />
                          </div>
                      </div>
                  </div>
              </div>
              <section className='col-span-4 '>
                  <div className='grid grid-cols-3 lg:grid-cols-5 gap-2'>
                      {whatWeOffer.map((offer, index) => (
                          <div
                              key={index}
                              className={`bg-green-500 rounded-lg text-gray-300 hover:cursor-pointer hover:bg-green-700
                              `}
                          >
                            <div className='p-4 flex flex-col items-center justify-center h-full'>
                                <div className='mb-2'>
                                    <img 
                                        src={offer.icon}
                                        alt={`Icon`}
                                        className={`w-10 h-10`}
                                    />
                                    {/* <FaBeer className='w-10 h-10'/> */}
                                </div>
                                <div>
                                    <p className='mb-3 font-normal'>
                                        {offer.subject}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-full py-4'>
                    <Link
                        href={`#`}
                        className={`w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
                        focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm
                        px-5 py-2.5 text-center
                        `}
                    >
                        Explore All Our Services
                    </Link>
                </div>
              </section>
          </section>
      </div>
  )
}
