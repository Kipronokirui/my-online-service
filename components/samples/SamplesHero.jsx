import React from 'react'
import styles from './samplesHero.module.css'
import Link from 'next/link'
import {BsFillCaretRightFill} from 'react-icons/bs'

export default function SamplesHero() {
  return (
      <div>
          <section className={`${styles.samples_hero}`}>
              <div className='text-center pt-16'>
                  <h1 className='text-2xl font-extrabold text-white tracking-tight leading-none md:text-3xl xl:text-4xl'>
                      Sample Projects
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
                      Sample projects
                  </span>
              </div>
          </section>
      </div>
  )
}
