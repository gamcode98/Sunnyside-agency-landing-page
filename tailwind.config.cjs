/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        heroImgMobile: "url('/src/assets/images/mobile/image-header.jpg')",
        heroImgDesktop: "url('/src/assets/images/desktop/image-header.jpg')",
      },
    },
    colors: {
      cVeryDarkDesaturatedBlue: '#23303e',
      cVeryDarkGrayishBlue: '#5a636c',
      cDarkGrayishBlue: '#818498',
      cGrayishBlue: '#a7abae',
      cWhite: '#ffffff',
      cSoftRed: '#fe7867',
      cYellow: '#fad400',
      cDarkDesaturatedCyan: '#25564b',
      cDarkBlue: '#19536b',
      cDarkModerateCyan: '#458c7e',
      cFooterGreen: '#7fd5c5',
      cHoverMenu: '#45d1fc',
    },
    fontFamily: {
      barlow: 'Barlow',
      fraunces: 'Fraunces',
    },
  },
  plugins: [],
}
