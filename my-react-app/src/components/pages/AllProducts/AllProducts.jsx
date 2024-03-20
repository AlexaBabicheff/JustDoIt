import React from 'react';
import Navigation from '../../Navigation/Navigation';
import Categories from '../../Categories/Categories';
import DiscountCard from '../../DiscountCard/Discount';
import Sale from '../../Sale/Sale';
import Contact from '../../Contact/Contact';
import Map from '../../Map/Map';

const AllProducts = () => (
  <div className="pageBody">
    <Navigation />
    <div className="line">
        <hr />
      </div>
      <div className="btns">
        <div className="main_page">
          <button className="cat">Main Page</button>
        </div>
        <div className="products_page">
          <button className="dog">All products</button>
        </div>
      </div>
    {/* <Categories /> {/* вместо категорий поставить AllProducts */}
    
    {/* <Contact />
    <Map /> */}
  </div>
);
export default AllProducts;