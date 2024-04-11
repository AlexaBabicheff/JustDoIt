import React from 'react';
import classes from './ProductCounter.module.css';

const ProductCounter = ({ count, setCount }) => {
  const handleInputChange = (e) => {
      const newValue = e.target.value;

      if (!isNaN(newValue) && newValue >= 0) {
          setCount(parseInt(newValue)); 
      }
  };

  return (
      <div className={classes.ProductCounterContainer}>
          <input
              type="number"
              value={count}
              onChange={handleInputChange} 
          />
      </div>
  );
};

export default ProductCounter;