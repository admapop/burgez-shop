import React from 'react'
import { Link } from 'react-router-dom'

// import { ReactComponent as Logo } from 'blablabla' this is for SVGs

import './header.styles.scss'

const Header = () => {
  return (
    <div className='header'>
      <Link className='logo-container' to="/">
        <img src={require("../../assets/burgez-logo.png")} alt=""/>
        {/* <Logo className='logo' /> */}
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
      </div>
    </div>
  )
}

export default Header
