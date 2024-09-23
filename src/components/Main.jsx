import React from 'react'
import Header from '../components/Header.jsx'
import Section1 from '../components/Section1.jsx'
import Footer from '../components/Footer.jsx'
import '../assets/scss/fixed.scss'

const Main = () => {
  return (
    <div id='wrap'>
      <Header />
      <Section1 />
      <div className='FixedBtn'>
        <div className='FixedBtn1'></div>
        <div className='FixedBtn2'></div>
      </div>
      <Footer />
    </div>
  )
}

export default Main
