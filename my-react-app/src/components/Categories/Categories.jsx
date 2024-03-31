
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "../Categories/Categories.module.css";
import { serverUrl } from '../../Config';

const Categories = ({ showAllCategories }) => {
  const [categories, setCategories] = useState([]);

  const categoriesURL = `${serverUrl}categories/all`;
  useEffect(() => {
    fetch(categoriesURL)
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
        {!showAllCategories && (
          <>
            <div className={classes.line}><hr /></div>
            <div className={classes.categoriesButton}>
              <button><Link to="/categories-review">All categories</Link></button>
            </div>
          </>
        )}
      </div>
      <div className={classes.categoriesCardsContainer}>
        {categories.slice(0, showAllCategories ? categories.length : 4).map((category) => (

          <Link key={category.id} to={`/categories/${category.id}`}>
            <div
              className={classes.categoriesCard}
              style={{ position: "relative", overflow: "hidden" }}
            >
              <img src={`${serverUrl}` + category.image} alt={category.title} />

              <div className={classes.description}>
                <div className={classes.title}>{category.title}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;