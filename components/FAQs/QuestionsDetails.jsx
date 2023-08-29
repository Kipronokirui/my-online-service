"use client";
import React from 'react'
import { Disclosure } from '@headlessui/react'
// import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function QuestionsDetails() {
  return (
    <div>
      <section>
        <div>
          <Disclosure>
            <div>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-green-200 px-4 py-3 mb-2 text-left font-medium text-green-600">
                <span>
                  This is the title
                </span>
              </Disclosure.Button>
              <Disclosure.Panel static className="text-gray-500 flex w-full justify-between rounded-lg px-4 mb-2 text-left text-sm font-medium">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </div>
          </Disclosure>
        </div>
      </section>
    </div>
  )
}
