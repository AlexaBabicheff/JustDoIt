import React, { useState, useEffect }  from 'react';
import Navigation from '../../Navigation/Navigation';
import Sale from '../../Sale/Sale';
import Contact from '../../Contact/Contact';
import Map from '../../Map/Map';

// import style from './AllSales.module.css';

const AllSales = () => (
  <div className="pageBody">
    {/* <div className={style}> */}
    <Navigation />
    <div className='container'>
    <div className="line">
        <hr />
      </div>
      <div className="btns">
        <div className="main_page">
          <button>Main Page</button>
        </div>
        <div className="categories_page">
          <button>All sales</button>
        </div>
      </div>
    <div className="sale_component">
    <Sale />
    </div>
   <div className="contact_component">
   <Contact />
   </div>
   <div className="map_component">
    <Map />
    </div>
    

    </div>
    
   </div>
);

export default AllSales;