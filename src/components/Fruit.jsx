import React from 'react'

function Fruit({ imageM, imageD, title, content, color }) {
  return (
    <section className="relative">
      <picture>
        <source media="(min-width:768px )" srcSet={imageD} />
        <source media="(min-width:375px )" srcSet={imageM} />
        <img src={screen.width < 768 ? imageM : imageD} alt="fruit" />
      </picture>
      <div className="absolute bottom-[10%] w-80 ml-auto mr-auto left-0 right-0">
        <h2 className={`font-fraunces text-3xl text-center text-${color} mb-4`}>
          {title}
        </h2>
        <p className={`text-center text-${color} font-barlow`}>{content}</p>
      </div>
    </section>
  )
}

export default Fruit
