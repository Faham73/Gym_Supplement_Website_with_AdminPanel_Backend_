import React, { useEffect, useState } from 'react';
import './NewCollections.css';
import Item from '../Item/Item';

export const NewCollections = () => {
    const [new_collection, setNew_collection] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCollections = async () => {
            try {
                const response = await fetch('http://localhost:4000/newcollections');
                const data = await response.json();
                setNew_collection(data);
            } catch (error) {
                console.error('Error fetching new collections:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCollections();
    }, []);

    return (
        <section className="new-collections-section">
            <div className="section-container">
                <div className="section-header">
                    <h2 className="section-subtitle">Fresh Arrivals</h2>
                    <h1 className="section-title">NEW COLLECTIONS</h1>
                    <div className="section-divider">
                        <div className="divider-line"></div>
                        <div className="divider-dot"></div>
                        <div className="divider-line"></div>
                    </div>
                    <p className="section-description">Discover our latest premium supplements for enhanced performance</p>
                </div>

                {isLoading ? (
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                    </div>
                ) : (
                    <div className="collections-grid">
                        {new_collection.map((item, i) => (
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
    );
};