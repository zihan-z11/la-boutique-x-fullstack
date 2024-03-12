import React from 'react'
import './Footer.css'
import instagram_icon from '../Asset/instagram_icon.png'
import pinterest_icon from '../Asset/pinterest_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <p>La Boutique X</p>
        </div>
        <ul className="footer-links">
            <li>COMPANY</li>
            <li>PRODUCTS</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <a href='https://www.instagram.com/serene_z.z.z/'><img src={instagram_icon} alt="" /></a>
            </div>
            <div className="footer-icons-container">
                <a href='https://www.pinterest.ca/zh1004/'><img src={pinterest_icon} alt="" /></a>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer;