import React from 'react';
import OneProductComponent from '../../OneProductComponent/OneProductComponent';
import Navigation from "../../Navigation/Navigation";
import classes from './OneProduct.module.css';
// import ProductCounter from '../../ProductCounter/ProductCounter';

const OneProduct = () => (
  <div className={classes.pageBody}>  
  <Navigation /> 
    <OneProductComponent />
    {/* <ProductCounter /> */}
  </div>
);

export default OneProduct;