import React from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../../firebase/firebase.utils';

// import { ReactComponent as Logo } from 'blablabla' this is for SVGs

import './header.styles.scss'

const Header = ({ currentUser }) => {
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
        {
          currentUser ?
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className='option' to='/signin'>SIGN IN</Link>
        }
      </div>
    </div>
  )
}

export default Header
