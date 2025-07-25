import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Item/Item'

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/popularsupplements');
        const data = await response.json();
        setPopularProducts(data);
      } catch (error) {
        console.error('Error fetching popular supplements:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className='popular-section'>
      <div className="popular-container">
        <div className="section-header">
          <h2 className="section-subtitle">Our Best Sellers</h2>
          <h1 className="section-title">POPULAR SUPPLEMENTS</h1>
          <div className="divider"></div>
          <p className="section-description">Premium quality supplements trusted by fitness enthusiasts</p>
        </div>

        {isLoading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="products-grid">
            {popularProducts.map((item, i) => (
              <Item 
                key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price} 
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Popular