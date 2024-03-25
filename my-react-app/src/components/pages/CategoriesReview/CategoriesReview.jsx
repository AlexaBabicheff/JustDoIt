import Navigation from "../../Navigation/Navigation";
import Categories from "../../Categories/Categories";
import Section from "../../Section/Section";
import Map from "../../Map/Map";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./CategoriesReview.css";
// import Mind_map from "../../Min_map/Mind_map";

const CategoriesReview = () => {
  return (
    <div>
      <Navigation />
      <Categories showAllCategories={true} />
      <Section />
      <Map />
    </div>
  );
};

export default CategoriesReview;