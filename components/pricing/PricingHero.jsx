import React from 'react'
import styles from './PricingHero.module.css'
import Link from 'next/link'
import {BsFillCaretRightFill} from 'react-icons/bs'

export default function PricingHero() {
  return (
      <div>
          <section className={`${styles.pricing_hero}`}>
              <div className='text-center pt-16'>
                  <h1 className='text-2xl font-extrabold text-white tracking-tight leading-none md:text-3xl xl:text-4xl'>
                      Pricing Page
                  </h1>
              </div>
          </section>
          <section className='bg-gray-300 h-16'>
              <div className='flex container items-center pt-6 space-x-2'>
                  <span>
                      <Link
                          href={'/'}
                          className='text-orange-400 font-bold hover:text-orange-600'
                      >
                          Home
                      </Link>
                  </span>
                  <span>
                      <BsFillCaretRightFill />
                  </span>
                  <span>
                      Pricing Page
                  </span>
              </div>
          </section>
      </div>
  )
}
