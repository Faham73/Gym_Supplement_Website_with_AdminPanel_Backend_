import React, { useState } from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className='description-box'>
      <div className="description-tabs">
        <button 
          className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button 
          className={`tab-button ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews <span className="review-count">(122)</span>
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'description' ? (
          <div className="description-content">
            <h3>Product Details</h3>
            <p>Experience unparalleled quality with our premium product. Crafted with meticulous attention to detail, this item combines innovative design with exceptional functionality to elevate your everyday experience.</p>
            
            <h3>Key Features</h3>
            <ul className="feature-list">
              <li>Premium materials for lasting durability</li>
              <li>Ergonomic design for maximum comfort</li>
              <li>Advanced technology for enhanced performance</li>
              <li>Eco-friendly manufacturing process</li>
              <li>Easy maintenance and cleaning</li>
            </ul>
            
            <h3>Specifications</h3>
            <div className="specs-grid">
              <div className="spec-item">
                <span className="spec-label">Material:</span>
                <span className="spec-value">High-grade polymer blend</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Dimensions:</span>
                <span className="spec-value">12" x 8" x 3"</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Weight:</span>
                <span className="spec-value">1.2 lbs</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Warranty:</span>
                <span className="spec-value">2 years limited</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="reviews-content">
            <div className="reviews-header">
              <div className="average-rating">
                <span className="rating-value">4.8</span>
                <span className="rating-stars">★★★★★</span>
                <span className="rating-count">Based on 122 reviews</span>
              </div>
              <button className="write-review-btn">Write a Review</button>
            </div>
            
            <div className="review">
              <div className="reviewer-info">
                <span className="reviewer-name">Alex Johnson</span>
                <span className="review-date">March 15, 2023</span>
                <span className="review-rating">★★★★☆</span>
              </div>
              <h4 className="review-title">Excellent product with premium feel</h4>
              <p className="review-text">The quality exceeded my expectations. It's comfortable to use and looks even better in person than in the photos. Definitely worth the investment.</p>
            </div>
            
            <div className="review">
              <div className="reviewer-info">
                <span className="reviewer-name">Sarah Miller</span>
                <span className="review-date">February 28, 2023</span>
                <span className="review-rating">★★★★★</span>
              </div>
              <h4 className="review-title">Perfect addition to my daily routine</h4>
              <p className="review-text">I've been using this for two weeks now and can already see the difference it makes. The craftsmanship is impeccable and it performs exactly as described.</p>
            </div>
            
            <button className="view-all-reviews">View All Reviews</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;