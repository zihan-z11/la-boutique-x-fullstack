import React from 'react'
import './Navbar.css'
import navProfile from '../../Asset/navprofile.jpg'

const Navbar = () => {
  return (
    <div className="navbar">
      <p className="nav-logo">La Boutique X</p>
      <img src={navProfile} className="nav-profile" />
    </div>
  )
}

export default Navbar
