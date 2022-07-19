import React from 'react'

function Food({ image, title, content, order }) {
  return (
    <section
      className={`md:flex ${
        order === 'first' ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center`}
    >
      <img src={image} alt="transfrom your brand" className="md:w-1/2" />
      <div className="w-80 my-16 ml-auto mr-auto">
        <h2 className="font-fraunces font-black text-3xl text-center md:text-left text-cVeryDarkDesaturatedBlue mb-4">
          {title}
        </h2>
        <p className="font-barlow text-cDarkGrayishBlue text-center md:text-left mb-4">
          {content}
        </p>
        <a
          className={`relative uppercase font-fraunces font-black text-cVeryDarkDesaturatedBlue text-center md:text-left block after:w-32 ${
            order === 'first' ? 'after:bg-cYellow' : 'after:bg-cSoftRed'
          } after:rounded-md after:h-4 after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-2/4 after:-z-10 lg:after:left-0 lg:after:-translate-x-1`}
          href="#"
        >
          Learn more
        </a>
      </div>
    </section>
  )
}

export default Food
