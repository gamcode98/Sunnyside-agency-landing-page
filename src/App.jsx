import React from 'react'
import Header from './components/Header.jsx'
import Food from './components/Food.jsx'
import transformYourBrand from './assets/images/mobile/image-transform.jpg'
import standOut from './assets/images/mobile/image-stand-out.jpg'
import graphicDesignMobile from './assets/images/mobile/image-graphic-design.jpg'
import graphicDesignDesktop from './assets/images/desktop/image-graphic-design.jpg'
import photographyMobile from './assets/images/mobile/image-photography.jpg'
import photographyDesktop from './assets/images/desktop/image-photography.jpg'
import Fruit from './components/Fruit.jsx'
import Testimonial from './components/Testimonial.jsx'
import testimonialImg1 from './assets/images/image-emily.jpg'
import testimonialImg2 from './assets/images/image-thomas.jpg'
import testimonialImg3 from './assets/images/image-jennie.jpg'
import Gallery from './components/Gallery.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const food = [
    {
      title: 'Transform your brand',
      content: `We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.`,
      image: transformYourBrand,
      order: 'first',
    },
    {
      title: 'Stand out to the right audience',
      content: ` Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. `,
      image: standOut,
      order: 'second',
    },
  ]
  const fruits = [
    {
      title: 'Graphic design',
      content: `Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.`,
      color: 'cDarkDesaturatedCyan',
      imageM: graphicDesignMobile,
      imageD: graphicDesignDesktop,
    },
    {
      title: 'Photography',
      content: ` Increase your credibility by getting the most stunning, high-quality photos that improve your business image.`,
      color: 'cDarkDesaturatedCyan',
      imageM: photographyMobile,
      imageD: photographyDesktop,
    },
  ]
  const testimonials = [
    {
      content: ` We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.`,
      name: 'Emily R.',
      job: 'Marketing Director',
      image: testimonialImg1,
    },
    {
      content: `Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.`,
      name: 'Thomas S.',
      job: 'Chief Operating Officer',
      image: testimonialImg2,
    },
    {
      content: `  Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!`,
      name: 'Jennie F.',
      job: 'Business Owner',
      image: testimonialImg3,
    },
  ]

  return (
    <>
      <Header />
      <main>
        {food.map((meal, index) => {
          return (
            <Food
              key={index}
              title={meal.title}
              content={meal.content}
              image={meal.image}
              order={meal.order}
            />
          )
        })}
        <section className="md:flex">
          {fruits.map((fruit, index) => {
            return (
              <Fruit
                key={index}
                title={fruit.title}
                content={fruit.content}
                color={fruit.color}
                imageM={fruit.imageM}
                imageD={fruit.imageD}
              />
            )
          })}
        </section>

        <h3 className="uppercase mt-12 font-fraunces text-center text-cGrayishBlue tracking-widest mb-14">
          Client testimonials
        </h3>
        <section className="md:flex">
          {testimonials.map((testimonial, index) => {
            return (
              <Testimonial
                key={index}
                content={testimonial.content}
                name={testimonial.name}
                job={testimonial.job}
                image={testimonial.image}
              />
            )
          })}
        </section>
        <Gallery />
      </main>
      <Footer />
    </>
  )
}
export default App
