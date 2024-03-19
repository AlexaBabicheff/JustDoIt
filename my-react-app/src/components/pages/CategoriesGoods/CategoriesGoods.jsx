import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Categories from "../../Categories/Categories";
import Navigation from "../../Navigation/Navigation";
import Contact from "../../Contact/Contact";
import Map from "../../Map/Map";
import './CategoriesGoods.css';

const CategoriesGoods = () => {
  const { categoryId } = useParams();
  const [categoryGoods, setCategoryGoods] = useState([]);

  useEffect(() => {
    const fetchCategoryGoods = async () => {
      try {
        const response = await fetch(`http://127\.0\.0\.1:3333/categoriesgoods/$\{categoryId\}`);
        const data = await response.json();
        setCategoryGoods(data);
      } catch (error) {
        console.error('Error fetching category goods:', error);
      }
    };

    fetchCategoryGoods();
  }, [categoryId]);

  return (
    <div>
      <Navigation />
      <h2>Goods in Category {categoryId}</h2>
      <ul>
        {categoryGoods.map((good) => (
          <li key={good.id}>{good.name}</li>
        ))}
      </ul>
      <section />
      <Map />
    </div>
  );
};

export default CategoriesGoods;
