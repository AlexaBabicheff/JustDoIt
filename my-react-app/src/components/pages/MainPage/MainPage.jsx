 import React from 'react';
 import Navigation from '../../Navigation/Navigation';
 import HeaderBanner from '../../HeaderBanner/Banner';
 import Categories from '../../Categories/Categories';
 import DiscountCard from '../../DiscountCard/Discount';
 import Form from '../../Form/Form';
 import Sale from '../../Sale/Sale';
 import Contact from '../../Contact/Contact';
 import Map from '../../Map/Map';
 

const MainPage = () => (
  <div className="pageBody">
    <Navigation />
    <HeaderBanner />
    {/* <Categories /> */}
    <Categories showAllCategories={false} />
    <DiscountCard />
    <Form />
    <Sale />
    <Contact />
    <Map />
  </div>
);
  
export default MainPage