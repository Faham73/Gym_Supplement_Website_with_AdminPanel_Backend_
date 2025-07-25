import React from 'react';
import './Offers.css';
import exclusive_image from '../Assets/Frontend_Assets/exclusive_image.png';

const Offers = () => {
  return (
    <section className="exclusive-offers">
      <div className="offers-container">
        <div className="offers-content">
          <div className="offers-text">
            <span className="offers-badge">LIMITED TIME</span>
            <h1 className="offers-heading">
              <span className="heading-line">Exclusive</span>
              <span className="heading-line">Offers For You</span>
            </h1>
            <p className="offers-subheading">ONLY ON BEST SELLERS PRODUCTS</p>
            <button className="offers-button">
              <span>Check Now</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="offers-image">
            <img src={exclusive_image} alt="Exclusive Offers" />
            <div className="image-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;