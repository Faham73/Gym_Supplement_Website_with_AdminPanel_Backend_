import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_dull_icon from "../Assets/Frontend_Assets/star_dull_icon.png";
import star_icon from "../Assets/Frontend_Assets/star_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState(null);
    const [mainImage, setMainImage] = useState(product.image);
    const [quantity, setQuantity] = useState(1);

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleQuantityChange = (change) => {
        setQuantity(prev => Math.max(1, prev + change));
    };

    return (
        <div className='product-display'>
            <div className="product-gallery">
                <div className="thumbnail-list">
                    {[product.image, product.image, product.image, product.image].map((img, index) => (
                        <div 
                            key={index} 
                            className={`thumbnail ${mainImage === img ? 'active' : ''}`}
                            onClick={() => setMainImage(img)}
                        >
                            <img src={img} alt={`Thumbnail ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div className="main-image-container">
                    <img src={mainImage} alt={product.name} className="main-image" />
                    <div className="image-badge">NEW</div>
                </div>
            </div>
            
            <div className="product-details">
                <div className="product-header">
                    <h1 className="product-title">{product.name}</h1>
                    <div className="rating-container">
                        <div className="stars">
                            {[...Array(4)].map((_, i) => (
                                <img key={i} src={star_icon} alt="Star" className="star-icon" />
                            ))}
                            <img src={star_dull_icon} alt="Star" className="star-icon" />
                        </div>
                        <span className="review-count">(122 reviews)</span>
                    </div>
                </div>

                <div className="price-container">
                    <span className="current-price">${product.new_price.toLocaleString()}</span>
                    {product.old_price && (
                        <span className="original-price">${product.old_price.toLocaleString()}</span>
                    )}
                    {product.old_price && (
                        <span className="discount-percentage">
                            {Math.round((product.old_price - product.new_price) / product.old_price * 100)}% OFF
                        </span>
                    )}
                </div>

                <p className="product-description">
                    Elevate your fitness routine with our premium {product.name}. Designed for maximum performance and comfort, 
                    this product features advanced technology to enhance your workout experience. The perfect blend of 
                    style and functionality for the modern athlete.
                </p>

                <div className="size-selector">
                    <h3 className="section-title">Select Size</h3>
                    <div className="size-options">
                        {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                            <button
                                key={size}
                                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                                onClick={() => handleSizeSelect(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="quantity-selector">
                    <h3 className="section-title">Quantity</h3>
                    <div className="quantity-controls">
                        <button 
                            className="quantity-btn" 
                            onClick={() => handleQuantityChange(-1)}
                            disabled={quantity <= 1}
                        >
                            −
                        </button>
                        <span className="quantity-value">{quantity}</span>
                        <button 
                            className="quantity-btn" 
                            onClick={() => handleQuantityChange(1)}
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className="action-buttons">
                    <button 
                        className="add-to-cart-btn"
                        onClick={() => {
                            if (!selectedSize) {
                                alert('Please select a size');
                                return;
                            }
                            addToCart(product.id, quantity, selectedSize);
                        }}
                    >
                        ADD TO CART
                    </button>
                    <button className="wishlist-btn">
                        WISHLIST
                    </button>
                </div>

                <div className="product-meta">
                    <div className="meta-item">
                        <span className="meta-label">Category:</span>
                        <span className="meta-value">Fitness, Supplements, {product.category}</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-label">Tags:</span>
                        <span className="meta-value">Premium, Performance, Quality</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;