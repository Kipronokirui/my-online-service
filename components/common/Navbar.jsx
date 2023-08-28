"use client";
import React, { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
      <div className='bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200'>
          <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
              <a href={"/"} className="flex items-center">
                  <img className="h-8 mr-3" src='https://flowbite.com/docs/images/logo.svg' alt='logo' />
                  <span className='self-center text-2xl font-semibold whitespace-nowrap'>
                      TutorsHub
                  </span>
              </a>
              <div className='block lg:hidden'>
                  <button
                      onClick={() => setIsOpen(!isOpen)}
                      className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
                  >
                    <svg
                        className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg
                        className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                  </button>
              </div>
              <div className={`items-center justify-between w-full 
                md:flex md:w-auto  ${isOpen ? "block" : "hidden"}
                `}
              >
                  <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 
                    md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700
                    `}
                  >
                      <li>
                          <a href="/services" className={`block py-2 text-black hover:text-blue-600`}>
                              Services
                          </a>
                      </li>
                      <li>
                          <a href="/blog/pricing" className={`block py-2 text-black hover:text-blue-600`}>
                              Pricing
                          </a>
                      </li>
                      <li>
                          <a href="/blog/how-it-works" className={`block py-2 text-black hover:text-blue-600`}>
                              How It Works
                          </a>
                      </li>
                      <li>
                          <a href="/samples" className={`block py-2 text-black hover:text-blue-600`}>
                              Samples
                          </a>
                      </li>
                      <li>
                          <a href="/blog/frequently-asked-questions" className={`block py-2 text-black hover:text-blue-600`}>
                              FAQs
                          </a>
                      </li>
                  </ul>
              </div>
              <div className={`items-center justify-between w-full 
                md:flex md:w-auto  ${isOpen ? "flex flex-col" : "hidden"}
                `}>
                  <button className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                   focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 ${isOpen ? "w-full" :""}
                   `}
                  >
                      Get Started
                  </button>
                  <button className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                   focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 ${isOpen ? "w-full" :""}
                   `}
                  >
                      Login
                  </button>
              </div>
          </div>
      </div>
  )
}
