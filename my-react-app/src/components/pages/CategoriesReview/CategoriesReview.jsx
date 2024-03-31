// Page Categories

import Navigation from "../../Navigation/Navigation";
import Categories from "../../Categories/Categories";
import Contact from "../../Contact/Contact";
import Map from "../../Map/Map";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import classes from "./CategoriesReview.module.css";

const CategoriesReview = () => {
  return (
    <div className="pageBody">
      <div className={classes.productsContainer}>
      <Navigation />
      <Categories showAllCategories={true} />
      <div className={classes.contact_map}>
      <Contact />
      <Map />
      </div>
    </div>
    </div>
  );
};

export default CategoriesReview;