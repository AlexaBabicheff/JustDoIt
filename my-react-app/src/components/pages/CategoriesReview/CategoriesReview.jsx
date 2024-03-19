import Navigation from "../../Navigation/Navigation";
import Categories from "../../Categories/Categories";
import Section from "../../Section/Section";
import Map from "../../Map/Map";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./CategoriesReview.css";
// import Mind_map from "../../Min_map/Mind_map";


const CategoriesReview = () => {
  const history = useHistory();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = async (categoryId) => {
    try {
      const response = await fetch(`http://127.0.0.1:3333/categories/${categoryId}`);
      const data = await response.json();
      console.log(data);
      setSelectedCategory(data);
      history.push('/categories-goods/' + categoryId); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="pageBody">
      <Navigation />
      <Categories
        showAllCategories={true}
        isHidden={false}
        onCategoryClick={handleCategoryClick}
      />
      <Section selectedCategory={selectedCategory} />
      <Map />
    </div>
  );
};

export default CategoriesReview;