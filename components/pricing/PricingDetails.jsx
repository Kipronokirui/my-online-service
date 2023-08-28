import React from 'react'

export default function PricingDetails() {
  return (
      <div>
          <section>
              <h1 className='text-blue-600 font-bold text-xl mb-2'>
                  Welcome to TopTutors
                  academic writing service
              </h1>
              <p className='mb-2 font-light text-black md:text-lg lg:text-lg'>
                  Providing you with the well researched and written academic projects has been
                  our main goal and greatest pleasure over the past years. Digging in numerous articles
                  and books to get the data necessary for your papers, finding writers who have background
                  in your subject matter, constantly improving our plagiarism scanning tools – this is job
                  that we do daily and that we are very proud of.
              </p>
              <p className='mb-2 font-light text-black md:text-lg lg:text-lg'>
                  Just like many other e-commerce companies, we want to ensure that we meet your
                  expectations in the world of online shopping. Flexibility of pricing might not be
                  our own invention or the most recent innovation, but we strongly believe that our
                  customers benefit from this opportunity every single day.
              </p>
          </section>
          <section className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-4'>
              <div>
                  <p className='mb-2 font-light text-black md:text-lg lg:text-lg'>
                      As you are placing an order, you
                      always have a chance to adjust the cost of your paper based on the
                      <span className='text-blue-400 font-bold text-lg'> three factors:</span>
                  </p>
                  <div className='flex justify-center'>
                      <ul className='list-disc text-black md:text-lg lg:text-lg'>
                          <li className='mb-2'>Academic Level</li>
                          <li className='mb-2'>Due Date</li>
                          <li className='mb-2'>Scope of Work</li>
                      </ul>
                  </div>
              </div>
              <div>
                  <img
                      src={`/images/tutor1.jpg`}
                      alt={`Image`}
                      className='rounded-lg'
                  />
              </div>
          </section>
          <section>
            <p className='mb-2 font-light text-black md:text-lg lg:text-lg'>
                The academic level plays a major role in the price calculation, and this is quite
                self-explanatory: the more complex the level of your paper is, the more experienced
                the writer should be and the more time and effort will he/ she spend on delivering an
                impeccable product.
            </p>
            <p className='mb-2 font-light text-black md:text-lg lg:text-lg'>
                The due date is another important factor as the close the due date is to the order
                placement date, the higher will be the final cost of the paper. Urgent requests are
                more expensive because they require writers to work extra hours to submit on time all
                of the projects they work on. We recommend placing an order in advance because this is
                a good way to spend less on you professionally written paper.
            </p>
            <p className='mb-2 font-light text-black md:text-lg lg:text-lg'>
                The scope of work is primarily the required length of your paper.
                Long papers require a more extensive research and more hours of work, this is why this
                factor affects the final cost as well. As we charge our customers per page of work,
                please take a look at the format to set your expectation:
            </p>
          </section>
          <section className='grid grid-cols-1 md:grid-cols-2 gap-2 mb-4'>
                <div>
                  <img
                      src={`/images/tutor1.jpg`}
                      alt={`Image`}
                      className='rounded-lg'
                  />
                </div>
              <div>
                  <p className='mb-2 font-light text-black md:text-lg lg:text-lg'>
                    The scope of work is primarily the required length of your paper.
                    Long papers require a more extensive research and more hours of work, this is why this
                    factor affects the final cost as well. As we charge our customers per page of work,
                    please take a look at the format to set your expectation:
                  </p>
                  <div className='flex justify-center'>
                      <ul className='list-disc text-black md:text-lg lg:text-lg'>
                          <li className='mb-2'>Times New Roman, 12pt</li>
                          <li className='mb-2'>Single Sided Page</li>
                          <li className='mb-2'>Double Spacing</li>
                          <li className='mb-2'>1-inch margins.</li>
                      </ul>
                  </div>
              </div>
          </section>
          <section>
            <p className='mb-2 font-light text-black md:text-lg lg:text-lg'>
                Please note that one single-spaced page will be priced as 2 double-spaced pages
                because of the default format.
            </p>
            <p className='mb-2 font-light text-black md:text-lg lg:text-lg'>
                When you purchase a paper, you receive a document that contains unique, custom-made
                content that has no copies and belongs to you only. This content is edited and scanned for
                plagiarism before it is released to the customer; therefore, you can be confident using it
                as a reference paper for your academic project. It will never be published on our website as
                our services are totally confidential.
            </p>
            <p className='mb-2 font-light text-black md:text-lg lg:text-lg'>
                All our prices are displayed on the homepage and can be calculated before you place an order.
                If you have any additional questions regarding our Pricing Policy, please contact our
                Customer Support team at your earliest convenience.
            </p>
          </section>
      </div>
  )
}
