import React from 'react'

function Testimonial({ content, name, job, image }) {
  return (
    <section className="w-80 ml-auto mr-auto mb-16">
      <img
        className="rounded-full w-16 block ml-auto mr-auto mb-8"
        src={image}
        alt="testimonial"
      />
      <p className="text-center text-cVeryDarkGrayishBlue font-barlow mb-6">
        {content}
      </p>
      <h4 className="text-center font-fraunces text-cVeryDarkDesaturatedBlue font-black mb-2">
        {name}
      </h4>
      <p className="text-center text-xs text-cGrayishBlue font-barlow">{job}</p>
    </section>
  )
}

export default Testimonial
