import React from 'react'
import '../assets/scss/header.scss'
import Logo from '../assets/img/logo.svg'

const Header = () => {
  return (
    <div className='nav'>
        <div className='NavWrap'>
                <div className='logo'>
                    <img src={Logo}></img>
                </div>
                <div className='NavMenu1'> 
                    <ul>
                        <li>초등 3학년 교과서</li>
                        <li>초등 4학년 교과서</li>
                    </ul>
                </div>
                <div className='NavMenu2'>
                    <ul>
                        <li>티솔루션</li>
                        <li>이벤트<span>EVENT</span></li>
                    </ul>
                </div>
        </div>
        <div className='NavLine'></div>
            
    </div>
  )
}

export default Header
