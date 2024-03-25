import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import classes from './CategoryProducts.module.css';
import { serverUrl } from '../../Config';


const CategoryProducts = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState(null);
  
  const categoryProductsURL =`${serverUrl}categories/${categoryId}`; 

  useEffect(() => {
    fetch(categoryProductsURL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => console.error(error));

    const categoriesAllURL = `${serverUrl}categories/all`
    fetch(categoriesAllURL)
      .then((response) => response.json())
      .then((data) => {
        const category = data.find(c => c.id === parseInt(categoryId));
        if (category) {
          setCategoryName(category.title);
        } else {
          setCategoryName("Category Not Found");
        }
      })
      .catch((error) => console.error(error));
  }, [categoryId]);
  
  return (
    <div className={classes.CategoryProductsContainer}>
      <div className={classes.CategoryProductsContainerHeader}>
        {categoryName ? <h1>{categoryName}</h1> : <p>Loading...</p>}
      </div>
      <div className={classes.ProductsContainer}>
        {products.map((product) => (
          <Link key={product.id} to={`/one-product/${product.id}`} className={classes.ProductCard}>
            <img src={`${serverUrl}/${product.image}`} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default CategoryProducts;