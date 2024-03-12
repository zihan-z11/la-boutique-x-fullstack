import React, { useContext, useState } from 'react'
import './Navbar.css'
import { FaBars } from "react-icons/fa";
import { MobileIcon, MobileMenu, MobileNavLogo, MobileLink} from './MobileNav.js'
import cart_icon from '../Asset/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const [menu, setMenu] = useState('shop')
  const [isOpen, setIsOpen] = React.useState(false);
  const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu('shop')}}>
          <Link to='/shop' style={{ textDecoration: 'none', color: 'white' }}>
            SHOP
          </Link>{menu==='shop'?<hr/>:<></>}
        </li>
        <li onClick={()=>{setMenu('floral')}}>
          <Link to='/floral' style={{ textDecoration: 'none', color: 'white'  }}>
           FLORAL
          </Link>{menu==='floral'?<hr/>:<></>}
        </li>
        <li onClick={()=>{setMenu('wood')}}>
          <Link to='/wood' style={{ textDecoration: 'none', color: 'white'  }}>
            WOOD
          </Link>{menu==='wood'?<hr/>:<></>}
        </li>
        <li onClick={()=>{setMenu('spice')}}>
          <Link to='/spice' style={{ textDecoration: 'none', color: 'white'  }}>
            SPICE
          </Link>{menu==='spice'?<hr/>:<></>}
        </li>
      </ul>
      <div className='nav-logo'>
        <p onClick={()=>{setMenu('shop')}}>
          <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>La Boutique X</Link>
        </p>
      </div>
      <div className='nav-login-cart'>
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/la-boutique-x/shop')}}>Log Out</button>
        :<Link to='/login'><button>LOGIN</button></Link>}
        <div className='nav-login-cart-group'>
            <Link to='/cart'><img src={cart_icon} alt='' /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
      <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <li onClick={() => { setMenu('shop'); setIsOpen(!isOpen) }}>
              <Link to='/shop' style={{
                textDecoration: 'none',
                color: 'white',
                borderBottom: menu === 'shop' && isOpen ? '2px solid white' : 'none'
              }}>
                SHOP
              </Link>
            </li>
            <li onClick={() => { setMenu('floral'); setIsOpen(!isOpen) }}>
              <Link to='/floral' style={{
                textDecoration: 'none',
                color: 'white',
                borderBottom: menu === 'floral' && isOpen ? '2px solid white' : 'none'
              }}>
                FLORAL
              </Link>
            </li>
            <li onClick={() => { setMenu('wood'); setIsOpen(!isOpen) }}>
              <Link to='/wood' style={{
                textDecoration: 'none',
                color: 'white',
                borderBottom: menu === 'wood' && isOpen ? '2px solid white' : 'none'
              }}>
                WOOD
              </Link>
            </li>
            <li onClick={() => { setMenu('spice'); setIsOpen(!isOpen) }}>
              <Link to='/spice' style={{
                textDecoration: 'none',
                color: 'white',
                borderBottom: menu === 'spice' && isOpen ? '2px solid white' : 'none'
              }}>
                SPICE
              </Link>
            </li>
            <div className='mobile-login-cart'>
              
              <div className='mobile-cart-group' onClick={() => { setMenu('cart'); setIsOpen(!isOpen) }}>
                <Link to='/cart'>
                  <img src={cart_icon} alt='' />
                </Link>
                <div className="mobile-cart-count">
                  {getTotalCartItems()}
                </div>
              </div>
              <Link to='/login' onClick={() => { setMenu('login'); setIsOpen(!isOpen) }}>
                <button>LOGIN</button>
              </Link>
            </div>
          </MobileMenu>
        )}
    </div>
  )
}

export default Navbar;
