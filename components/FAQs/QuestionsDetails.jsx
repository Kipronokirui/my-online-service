"use client";
import React from 'react'
import { Disclosure } from '@headlessui/react'
import { HiChevronDown } from "react-icons/hi";
import {questions} from './utils'
// import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function QuestionsDetails() {
  return (
    <div>
      <section className='mt-4'>
          {questions.map((question, index) => (
            <div key={index}>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex space-x-3 w-full justify-between rounded-lg bg-green-200 px-4 py-3 mb-2 text-left font-medium text-green-600">
                  {question.question_title}
                  <span className={`ml-4 bg-white rounded-full`}>
                    <HiChevronDown
                      className={`h-8 w-8 text-purple-500 
                        ${open ? 'rotate-180 transform' : ''}
                        `}
                    />
                  </span>
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500 flex w-full justify-between rounded-lg px-4 mb-2 text-left text-sm font-medium">
                {question.answer}
              </Disclosure.Panel>
              </>
            )}
              
          </Disclosure>
          </div>
          ))}
      </section>
    </div>
  )
}
