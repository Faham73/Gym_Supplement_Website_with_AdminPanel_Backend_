import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/Frontend_Assets/logo_big.png';
import instagram_icon from '../Assets/Frontend_Assets/instagram_icon.png';
import pinterest_icon from '../Assets/Frontend_Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/Frontend_Assets/whatsapp_icon.png';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={footer_logo} alt="GYS Logo" className="logo-img" />
              <p className="brand-name">SHOPPER</p>
            </div>
            <p className="brand-tagline">Premium quality for your fitness journey</p>
          </div>

          <div className="footer-links-container">
            <div className="footer-links-column">
              <h3 className="links-heading">Company</h3>
              <ul className="footer-links">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Press</li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3 className="links-heading">Products</h3>
              <ul className="footer-links">
                <li>Pre-Workout</li>
                <li>Protein</li>
                <li>Gainers</li>
                <li>Fat Burners</li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3 className="links-heading">Support</h3>
              <ul className="footer-links">
                <li>Contact Us</li>
                <li>FAQs</li>
                <li>Shipping</li>
                <li>Returns</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-social">
            <h3 className="social-heading">Follow Us</h3>
            <div className="footer-social-icons">
              <a href="#" className="social-icon" aria-label="Instagram">
                <img src={instagram_icon} alt="Instagram" />
              </a>
              <a href="#" className="social-icon" aria-label="Pinterest">
                <img src={pinterest_icon} alt="Pinterest" />
              </a>
              <a href="#" className="social-icon" aria-label="WhatsApp">
                <img src={whatsapp_icon} alt="WhatsApp" />
              </a>
            </div>
          </div>

          <div className="footer-legal">
            <div className="footer-copyright">
              <p>© 2025 GYS. All rights reserved.</p>
            </div>
            <div className="footer-legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};