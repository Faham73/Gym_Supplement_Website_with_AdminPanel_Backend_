import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-box">
        <h3 className="newsletter-title">Join Our Fitness Community</h3>
        <p className="newsletter-subtitle">Subscribe to receive exclusive offers, workout tips, and nutrition advice</p>
        
        <form className="newsletter-form">
          <div className="form-group">
            <input 
              type="email" 
              className="newsletter-input" 
              placeholder="Your email address" 
              required 
            />
            <button type="submit" className="newsletter-btn">
              <span>Subscribe</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </form>
        
        <div className="newsletter-perks">
          <div className="perk-item">
            <div className="perk-icon">🎁</div>
            <p>Exclusive Member Discounts</p>
          </div>
          <div className="perk-item">
            <div className="perk-icon">💪</div>
            <p>Workout Plans</p>
          </div>
          <div className="perk-item">
            <div className="perk-icon">🍏</div>
            <p>Nutrition Guides</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;