import React, { useState } from 'react'
import logo from './../assets/images/logo.svg'
import menu from './../assets/images/icon-hamburger.svg'
import iconArrowDown from './../assets/images/icon-arrow-down.svg'

function Header() {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }

  window.addEventListener('resize', () => setClicked(false))
  window.addEventListener('scroll', () => setClicked(false))

  return (
    <header className="bg-heroImgMobile md:bg-heroImgDesktop bg-bottom h-[470px] bg-cover bg-no-repeat  p-4">
      <nav className="flex justify-between items-start lg:items-center relative mb-20">
        <img src={logo} alt="logo" />
        <ul
          className={`absolute text-cGrayishBlue lg:text-cWhite font-bold text-center left-0 right-0 top-20 w-11/12 ml-auto mr-auto bg-cWhite before:w-8 before:h-8 before:bg-cWhite before:absolute before:right-0 before:-top-8 custom-css
        ${
          clicked
            ? 'translate-x-0 transition-transform'
            : 'translate-x-[-150%] transition-transform'
        }
        lg:translate-x-0 lg:before:invisible lg:bg-opacity-0 lg:static lg:flex lg:gap-8 lg:items-center lg:w-fit lg:mr-0 lg:ml-0
        `}
        >
          <li className="mt-8 mb-4 lg:mt-0 lg:mb-0">
            <a href="#">About</a>
          </li>
          <li className="mb-4 lg:mb-0">
            <a href="#">Services</a>
          </li>
          <li className="mb-4 lg:mb-0">
            <a href="#">Projects</a>
          </li>
          <li className="mb-8 lg:mb-0">
            <a
              className="font-fraunces uppercase block font-semibold text-cVeryDarkDesaturatedBlue w-fit ml-auto mr-auto pl-6 pr-6 rounded-full p-4 bg-cYellow lg:bg-cWhite hover:bg-cHoverMenu hover:text-cWhite"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
        <button className="lg:hidden" onClick={handleClick}>
          <img width={20} src={menu} alt="menu" />
        </button>
      </nav>
      <h1 className="uppercase text-cWhite font-fraunces font-black text-3xl text-center tracking-widest mb-8">
        We are creatives
      </h1>

      <img
        className="block ml-auto mr-auto"
        src={iconArrowDown}
        alt="icon-arrow-down"
      />
    </header>
  )
}

export default Header
