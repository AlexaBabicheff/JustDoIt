 import React from 'react';
 import HeaderBanner from '../../HeaderBanner/Banner';
 import Navigation from '../../Navigation/Navigation';
 import Categories from '../../Categories/Categories';
 import DiscountCard from '../../DiscountCard/Discount';
 import Sale from '../../Sale/Sale';
 import Contact from '../../Contact/Contact';
 import Map from '../../Map/Map';
 import Form from '../../Form/Form';

const HomePage = () => (
  <div className="pageBody">
    <Navigation />
    <HeaderBanner />
    <Categories />
    <DiscountCard />
    <Sale />
    <Form />
    <Contact />
    <Map />
  </div>
);

export default HomePage;