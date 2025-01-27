import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className="headers">
              <div className="left_header">
               <Link className='testing' to="/">  Get the App </Link>
              </div>
              <div className="right_header">
              <Link className='testing' to="/investor">  Investor </Link>
              <Link className='testing' to="/">  Get the App </Link>
              <Link className='testing' to="/">  Get the App </Link>
              <Link className='testing' to="/">  Get the App </Link>
               
               
               
               
              </div>
        </div>
    </div>
  )
}

export default Header