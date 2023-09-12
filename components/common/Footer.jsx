import Link from 'next/link'
import React from 'react'

const footerItems = [
  {
    title: 'Company',
    links: [
      { title: 'Services', href: '#' },
      { title: 'Pricing', href: '#' },
      { title: 'How It Works', href: '#' },
      { title: 'Samples', href: '#' },
      { title: 'FAQs', href: '#' },
    ]
  },
  {
    title: 'Our Services',
    links: [
      { title: 'Essay Writing', href: '#' },
      { title: 'Reasearch Paper Writing', href: '#' },
      { title: 'Case Study Writing', href: '#' },
      { title: 'Assignment Help', href: '#' },
      { title: 'Dissertation Writing', href: '#' },
      { title: 'Thesis Writing', href: '#' },
      { title: 'Term Paper Writing', href: '#' }
    ]
  },
  {
    title: 'Legal Info',
    links: [
      { title: 'About Us', href: '#' },
      {title:'About Us', href:'#'},
    ]
  },
]
export default function Footer() {
  return (
    <div className='container'>
      <section className='pt-8 pb-16'>
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4`}>
          <div>
            <h1 className='mb-2 text-medium font-semibold text-gray-200 dark:text-white'>
              TopTutors
            </h1>
            <p className='text-sm text-gray-300 dark:text-gray-400 font-medium'>
              We’ve written thousands of custom dissertations for Ph.D. students who've gone ahead to
              earn their doctorate degrees. We understand all the challenges that come with writing a
              dissertation or a thesis for that matter.
            </p>
          </div>
          {footerItems.map((item, index) => (
          <div key={index}>
            <h2 className='mb-4 text-medium font-semibold text-gray-200 dark:text-white'>
              {item.title}
            </h2>
            <div>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                {item.links.map((link, index) => (
                  <li
                    key={index}
                    className='text-white'
                  >
                    <Link href={link.href}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          ))}
        </div>
      </section>
    </div>
    
  )
}
