import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/Frontend_Assets/logo.png'
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'
import nav_dropdown from '../Assets/Frontend_Assets/nav_dropdown.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} onClick={() => setMenu("shop")}>
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </Link>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("pre_workout") }}><Link style={{ textDecoration: 'none' }} to='/pre_workout'>Pre-workout</Link>{menu === "pre_workout" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("gainer") }}><Link style={{ textDecoration: 'none' }} to='/gainer'>Gainer</Link>{menu === "gainer" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("fat_burner") }}><Link style={{ textDecoration: 'none' }} to='/fat_burner'>Fat Burner</Link>{menu === "fat_burner" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
          ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
          : <Link to='/login'><button>Login</button></Link>

        }

        <Link to='/cart'><img src={cart_icon} alt="" /></Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>

  )
}

export default Navbar