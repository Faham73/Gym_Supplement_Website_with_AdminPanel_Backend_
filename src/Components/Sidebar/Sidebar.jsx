// src/Components/Sidebar/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <h3>Categories</h3>
        <ul>
          <li><Link to="/pre_workout">Pre-workout</Link></li>
          <li><Link to="/gainer">Gainer</Link></li>
          <li><Link to="/fat_burner">Fat Burner</Link></li>
        </ul>
      </div>
      
      <div className="sidebar-section">
        <h3>Popular Categories</h3>
        <ul>
          <li><Link to="/seasonal">Seasonal</Link></li>
          <li><Link to="/phone">Phone</Link></li>
          <li><Link to="/sports">Sports & Entertainment</Link></li>
          <li><Link to="/watch">Watch</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;