import React from 'react'
import Link from 'next/link'
import styles from './home.module.css'

export default function Hero() {
  return (
      <section className={`${styles.hero}`}>
          <div className='container grid max-w-screen-xl lg:px-8 pt-10 lg:pt-16 mx-auto lg:gap-8 xl:gap-0 lg:py-24 lg:grid-cols-12'>
              <div className='px-4 lg:pl-16 mr-auto place-self-center lg:col-span-7'> 
                  <h1 className='max-w-2xl mb-2 text-2xl font-extrabold text-white tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white'>
                      ACADEMIC WRITING SERVICE
                      DELIVERING THE BEST HELP ONLINE
                  </h1>
                  <p className="max-w-2xl mb-2 font-light text-gray-200 lg:mb-2 md:text-lg lg:text-xl dark:text-gray-400">
                      Are you looking for an academic writer? Delve into our professional writing services online.
                      Opt-in for the best all-inclusive help with academic writing by industry-leading subject
                      virtuosos.
                  </p>
                  <div className='pb-2'>
                      <Link
                          href={`#`}
                          className={`inline-flex items-center justify-center px-3 py-2 mr-3 
                          text-base font-medium text-center text-white rounded-lg
                          bg-gradient-to-r from-green-400 to-blue-500
                          hover:from-pink-500 hover:to-yellow-500`}>
                        Get Started
                    </Link>
                  </div>
              </div>
              <div className='px-4 lg:pl-16 mr-auto place-self-center lg:col-span-5'>
                  <section>
                      <img
                          src={`/images/happy.jpg`}
                          alt={`Image`}
                          className='h-80 w-full rounded-lg'
                      />
                  </section>
              </div>
              
          </div>
      </section>
  )
}
