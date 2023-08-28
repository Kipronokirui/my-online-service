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
            <h1>
              TopTutors
            </h1>
          </div>
          {footerItems.map((item, index) => (
          <div key={index}>
            <h2 className='mb-4 text-medium font-semibold text-gray-200 dark:text-white'>
              {item.title}
            </h2>
            <div>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                {item.links.map((link, index) => (
                  <li key={index}>
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
