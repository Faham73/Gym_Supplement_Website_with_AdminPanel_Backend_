import React, { useContext, useRef, useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../Assets/Frontend_Assets/logo.png'
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'
import nav_dropdown from '../Assets/Frontend_Assets/nav_dropdown.png'
import { Link, useLocation } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [scrolled, setScrolled] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    // Update active menu based on current route
    const path = location.pathname.substring(1);
    if (path && path !== menu) {
      setMenu(path);
    }
  }, [location, menu]);

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} onClick={() => setMenu("shop")}>
            <img src={logo} alt="Shopper Logo" className="logo-img" />
            <p className="logo-text">SHOPPER</p>
          </Link>
        </div>
        
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="Menu" />
        
        <ul ref={menuRef} className="nav-menu">
          <li onClick={() => { setMenu("shop") }} className={menu === "shop" ? 'active' : ''}>
            <Link to='/'>Shop</Link>
          </li>
          <li onClick={() => { setMenu("pre_workout") }} className={menu === "pre_workout" ? 'active' : ''}>
            <Link to='/pre_workout'>Pre-workout</Link>
          </li>
          <li onClick={() => { setMenu("gainer") }} className={menu === "gainer" ? 'active' : ''}>
            <Link to='/gainer'>Gainer</Link>
          </li>
          <li onClick={() => { setMenu("fat_burner") }} className={menu === "fat_burner" ? 'active' : ''}>
            <Link to='/fat_burner'>Fat Burner</Link>
          </li>
        </ul>
        
        <div className="nav-login-cart">
          {localStorage.getItem('auth-token')
            ? <button 
                className="nav-button" 
                onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}
              >
                Logout
              </button>
            : <Link to='/login'>
                <button className="nav-button">Login</button>
              </Link>
          }

          <Link to='/cart' className="cart-link">
            <img src={cart_icon} alt="Cart" className="cart-icon" />
            {getTotalCartItems() > 0 && (
              <div className="nav-cart-count">{getTotalCartItems()}</div>
            )}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar