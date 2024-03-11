import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import {Categories} from './components/Categories/Categories'
import {DiscountCard}  from './components/DiscountCard/Discount'
import {Sale} from './components/Sale/Sale'
import {Contact} from './components/Contact/Contact'
import {Map} from './components/Map/Map'
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <> 
      <Header />
      <Banner />
      <Outlet/>
    
    {/* 
    //   <Categories />
    //   <DiscountCard />
    //   <Sale />
    //   <Contact />
    //   <Map /> */}
    </>
  );
}