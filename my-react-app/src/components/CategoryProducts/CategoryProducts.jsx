// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import classes from './CategoryProducts.module.css';

// const CategoryProducts = () => {
//   const { categoryId } = useParams();
//   const [products, setProducts] = useState([]);
//   const [categoryName, setCategoryName] = useState(null);

//   useEffect(() => {
//     fetch(`http://127.0.0.1:3333/categories/${categoryId}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data.data);
//       })
//       .catch((error) => console.error(error));

//     fetch(`http://127.0.0.1:3333/categories/all`)
//       .then((response) => response.json())
//       .then((data) => {
//         const category = data.find(c => c.id === parseInt(categoryId));
//         if (category) {
//           setCategoryName(category.title);
//         } else {
//           setCategoryName("Category Not Found");
//         }
//       })
//       .catch((error) => console.error(error));
//   }, [categoryId]);

//   return (
//     <div className={classes.CategoryProductsContainer}>
//       <div className={classes.CategoryProductsContainerHeader}>
//         {categoryName ? <h1>{categoryName}</h1> : <p>Loading...</p>}
//       </div>
//       <div className={classes.ProductsContainer}>
//         {products.map((product) => (
//           <div key={product.id} className={classes.ProductCard}>
//             <img src={`http://127.0.0.1:3333/${product.image}`} alt={product.title} />
//             <h3>{product.title}</h3>
//             <p>Price: ${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryProducts;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import classes from "./CategoryProducts.module.css";
import { serverUrl } from "../../Config";
import Navigation from "../Navigation/Navigation";

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState(null);

  const categoryProductsURL = `${serverUrl}categories/${categoryId}`;

  useEffect(() => {
    fetch(categoryProductsURL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => console.error(error));

    const categoriesAllURL = `${serverUrl}categories/all`;
    fetch(categoriesAllURL)
      .then((response) => response.json())
      .then((data) => {
        const category = data.find((c) => c.id === parseInt(categoryId));
        if (category) {
          setCategoryName(category.title);
        } else {
          setCategoryName("Category Not Found");
        }
      })
      .catch((error) => console.error(error));
  }, [categoryId]);

  return (
    <div className={classes.pageBody}>
<Navigation />
      <div className={classes.btns_prod}>
        <div className={classes.btn_mainPage}>
          <button3>
            <Link to="/">Main Page</Link>
          </button3>
        </div>
        <div className={classes.line__MinePageToCategories}>
          <hr />
        </div>
        <div className={classes.btn_categories}>
          <div className={classes.line__CategoriesToProducts}>
            <hr />
          </div>
          <button3>
            <Link to="/categories-review">Categories</Link>
          </button3>
        </div>
        <div className={classes.btn_products}>
          <button3>
            <Link to="/categories/2">Products</Link>
          </button3>
        </div>
      </div>
      
    <div className={classes.CategoryProductsContainer}>
      <div className={classes.CategoryProductsContainerHeader}>
        {categoryName ? <h1>{categoryName}</h1> : <p>Loading...</p>}
      </div>
      <div className={classes.ProductsContainer}>
        <div className={classes.ProductsContainerCard}>
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/one-product/${product.id}`}
              className={classes.ProductCard}>
              <img src={`${serverUrl}/${product.image}`} alt={product.title} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};
export default CategoryProducts;
