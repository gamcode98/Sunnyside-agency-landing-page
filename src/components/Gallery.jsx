import React from 'react'

import milkBottlesMobile from './../assets/images/mobile/image-gallery-milkbottles.jpg'
import milkBottlesDesktop from './../assets/images/desktop/image-gallery-milkbottles.jpg'
import orangeMobile from './../assets/images/mobile/image-gallery-orange.jpg'
import orangeDesktop from './../assets/images/desktop/image-gallery-orange.jpg'
import coneMobile from './../assets/images/mobile/image-gallery-cone.jpg'
import coneDesktop from './../assets/images/desktop/image-gallery-cone.jpg'
import sugarCubesMobile from './../assets/images/mobile/image-gallery-sugar-cubes.jpg'
import sugarCubesDesktop from './../assets/images/desktop/image-gallery-sugarcubes.jpg'

function Gallery() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4">
      <picture>
        <source media="(min-width:768px )" srcSet={milkBottlesDesktop} />
        <source media="(min-width:375px )" srcSet={milkBottlesMobile} />
        <img
          src={screen.width < 768 ? milkBottlesMobile : milkBottlesDesktop}
          alt="milk-bottles"
        />
      </picture>
      <picture>
        <source media="(min-width:768px )" srcSet={orangeDesktop} />
        <source media="(min-width:375px )" srcSet={orangeMobile} />
        <img
          src={screen.width < 768 ? orangeMobile : orangeDesktop}
          alt="orange"
        />
      </picture>
      <picture>
        <source media="(min-width:768px )" srcSet={coneDesktop} />
        <source media="(min-width:375px )" srcSet={coneMobile} />
        <img src={screen.width < 768 ? coneMobile : coneDesktop} alt="cone" />
      </picture>
      <picture>
        <source media="(min-width:768px )" srcSet={sugarCubesDesktop} />
        <source media="(min-width:375px )" srcSet={sugarCubesMobile} />
        <img
          src={screen.width < 768 ? sugarCubesMobile : sugarCubesDesktop}
          alt="sugar-cubes"
        />
      </picture>
    </section>
  )
}

export default Gallery
