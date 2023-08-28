import React from 'react'
import { services } from './utils'

export default function ServicesIntro() {
  return (
      <div className='mt-4'>
          <section>
              {services.map((service, index) => (
                  <div className={`grid grid-cols-2 gap-2 mb-4`}
                      key={index}
                  >
                    <div className={index % 2 === 0 ? 'order-first' : 'order-last'}>
                        <img
                            src={service.image}
                            alt={`Image`}
                            className='h-auto max-w-full rounded-lg'
                        />
                    </div>
                    <div className='pl-2'>
                        <h1 className='max-w-2xl mb-2 text-2xl font-extrabold text-gray-700 tracking-tight leading-none md:text-3xl xl:text-4xl'>
                            {service.title}
                        </h1>
                        <p className='max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl'>
                            {service.description}
                        </p>
                    </div>
              </div>
              ))}
          </section>
      </div>
  )
}
