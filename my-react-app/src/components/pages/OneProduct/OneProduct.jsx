import React from 'react';
import OneProductComponent from '../../OneProductComponent/OneProductComponent';
import Navigation from "../../Navigation/Navigation";
import classes from './OneProduct.module.css';

const OneProduct = () => (
  <div className={classes.pageBody}>  
  <Navigation /> 
    <OneProductComponent />
   </div>
);

export default OneProduct;