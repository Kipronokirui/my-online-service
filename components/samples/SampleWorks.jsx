import React from 'react'
import { samples } from './utils'
import {BsFiletypePdf} from 'react-icons/bs'
import Link from 'next/link'

export default function SampleWorks() {
  return (
    <div>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
        {samples.map((sample, index) => (
          <div
            key={index}
            className={`max-w-sm p-6 bg-white border border-gray-200 rounded-lg 
            shadow dark:bg-gray-800 dark:border-gray-700
            `}
          >
          <div className='flex justify-between items-center mb-6'>
            <div>
                <h6 className={`font-sans text-lg not-italic font-bold text-gray-600`}>
                  {sample.title}
                </h6>
            </div>
            <div>
                <BsFiletypePdf className={`text-blue-500 text-3xl`}/>
            </div>
          </div>
          <div className='pl-2'>
              <p>
                {sample.category.category_title}
              </p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-2 gap-4 mb-2'>
            <div className='bg-gray-300 max-w-full rounded-lg'>
              <div className='p-2'>
                  <h6 className='font-bold'>{ sample.pages}</h6>
                <small className='text-gray-500'>Pages</small>
              </div>
            </div>
            <div className='bg-gray-300 max-w-full rounded-lg'>
              <div className='p-2'>
                  <h6 className='font-bold'>{ sample.pages}</h6>
                <small className='text-gray-500'>Sources</small>
              </div>
            </div>
            <div className='bg-gray-300 max-w-full rounded-lg'>
              <div className='p-2'>
                  <h6 className='font-bold'>{ sample.style}</h6>
                <small className='text-gray-500'>Style</small>
              </div>
            </div>
            <div className='bg-gray-300 max-w-full rounded-lg'>
              <div className='p-2'>
                  <h6 className='font-bold'>{ sample.level}</h6>
                <small className='text-gray-500'>Level</small>
              </div>
            </div>
          </div>
          <div>
            <a
                href={sample.document}
                download={sample.slug}
            >
              <button
                className={`w-full text-white bg-blue-700 hover:bg-blue-800 
                font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2`}
              >
                Download
              </button>
            </a>
          </div>
        </div>
        ))}
      </section>
    </div>
  )
}