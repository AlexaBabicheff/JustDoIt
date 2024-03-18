import React, { useEffect, useState } from "react";
import classes from "../Categories/Categories.module.css";

const Categories = ({ showAllCategories }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3333/categories/all")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={classes.categoriesContainer}>
      <div className={classes.categoriesContainerHeader}>
        <div>
          <p>Categories</p>
        </div>
        {/* Скрываем <hr> и кнопку "All categories", если showAllCategories равно false */}
        {!showAllCategories && (
          <>
            <div className={classes.line}><hr /></div>
            <div className={classes.categoriesButton}>
              <button><a href="#">All categories</a></button>
            </div>
          </>
        )}
      </div>
      <div className={classes.categoriesCardsContainer}>
        {categories.map((category) => (
          <div
            key={category.id}
            className={classes.categoriesCard}
            style={{ position: "relative", overflow: "hidden" }}
          >
            <img src={"http://127.0.0.1:3333" + category.image} alt={category.title} />
            <div className={classes.description}>
              <div className={classes.title}>{category.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;