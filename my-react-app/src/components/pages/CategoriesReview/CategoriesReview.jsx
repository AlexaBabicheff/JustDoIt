import Navigation from "../../Navigation/Navigation";
import Categories from "../../Categories/Categories";
import Section from "../../Section/Section";
import Map from "../../Map/Map";
import React, { useState } from 'react';
import "./CategoriesReview.css";
// import Mind_map from "../../Min_map/Mind_map";

export const CategoriesReview = () => {

  return (
    <div className="pageBody">
      <Navigation />
      {/* Установим isHidden в false, чтобы отобразить все категории и надпись "Categories" */}
      <Categories showAllCategories={true} isHidden={false} />
      <Section />
      <Map />
    </div>
  );
};