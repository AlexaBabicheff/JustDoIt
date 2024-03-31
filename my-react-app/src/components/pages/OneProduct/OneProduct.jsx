import React from 'react';
import OneProductComponent from '../../OneProductComponent/OneProductComponent';
import classes from './OneProduct.module.css';
import ProductCounter from '../../ProductCounter/ProductCounter';

const OneProduct = () => (
  <div className={classes.pageBody}>   
    <OneProductComponent />
    <ProductCounter />
  </div>
);

export default OneProduct;