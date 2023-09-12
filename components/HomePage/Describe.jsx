import React from 'react'

export default function Describe() {
  return (
      <div
          className={`rounded-lg`}
          style={{ backgroundColor: "#000033" }}>
          <section className={`p-4 grid grid-cols-1 lg:grid-cols-2 gap-2`}>
              <div className='flex items-center h-full'>
                  <section>
                    <h1 className='max-w-2xl mb-2 text-2xl font-extrabold text-white tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white'>
                        Offering Top Qualified Tutors
                    </h1>
                    <p className="max-w-2xl mb-2 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                          TopTutors only works with the highest quality tutors. Our tutors are vetted
                          for subject expertise and hold degrees such as bachelors, Master, and PHDs.
                          Many of our tutors are affiliated with top tier educational institutions.
                    </p>
                  </section>
              </div>
              <div>
                  <section>
                    <div className={``}>
                        <img
                            src={`/images/tutor3.jpeg`}
                            alt={`Image`}
                            className='h-auto w-full rounded-lg'
                        />
                    </div>
                  </section>
              </div>
          </section>
      </div>
  )
}
