import React, { useState } from 'react';
import classes from './ProductCounter.module.css';

const ProductCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className={classes.ProductCounterContainer}>
      <button onClick={decrement}>-</button>
      <input type="number" value={count} readOnly />
      <button onClick={increment}>+</button>
    </div>
  );
};

export default ProductCounter;