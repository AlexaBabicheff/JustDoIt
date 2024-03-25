import React from 'react';
import OneProductComponent from '../../OneProductComponent/OneProductComponent';
import classes from './OneProduct.module.css';

const OneProduct = () => (
  <div className={classes.pageBody}>   
    <p>One product which client has choose</p>
    <OneProductComponent />
  </div>
);

export default OneProduct;