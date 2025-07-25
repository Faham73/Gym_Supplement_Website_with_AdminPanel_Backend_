import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = (props) => {
  const discountPercentage = Math.round(
    ((props.old_price - props.new_price) / props.old_price) * 100
  );

  return (
    <div className='product-card'>
      <Link to={`/product/${props.id}`} className='product-link' onClick={() => window.scrollTo(0, 0)}>
        <div className='product-image-container'>
          <img src={props.image} alt={props.name} className='product-image' />
          {props.old_price > props.new_price && (
            <div className='discount-badge'>-{discountPercentage}%</div>
          )}
          <div className='product-overlay'>
            <button className='quick-view-btn'>Quick View</button>
          </div>
        </div>
        
        <div className='product-details'>
          <h3 className='product-name'>{props.name}</h3>
          
          <div className='price-container'>
            <span className='current-price'>৳{props.new_price.toLocaleString()}</span>
            {props.old_price > props.new_price && (
              <span className='original-price'>৳{props.old_price.toLocaleString()}</span>
            )}
          </div>
          
          <div className='product-actions'>
            <button className='add-to-cart-btn'>Add to Cart</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;