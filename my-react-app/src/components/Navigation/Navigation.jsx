import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className="navigation">
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/all-goods">All Goods</NavLink></li>
      <li><NavLink to="/categories-review">Categories</NavLink></li> 
      <li><NavLink to="/sale-goods">Sale</NavLink></li>
      <li><NavLink to="/bag">Bag</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li className="burger">☰</li>
    </ul>
  </nav>
);

export default Navigation;