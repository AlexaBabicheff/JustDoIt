import React, { useEffect, useState } from "react";
import Navigation from "../../Navigation/Navigation";
import classes from "./AllProducts.module.css";

import Contact from "../../Contact/Contact";
import Map from "../../Map/Map";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showDiscounted, setShowDiscounted] = useState(false);

  useEffect(() => {
    fetch("http://127.0.0.1:3333/products/all")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) =>
        console.error("Ошибка загрузки данных о продуктах:", error)
      );
  }, []);

  const openProductDetails = (product) => {
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
          <style>
              body { font-family: Arial, sans-serif; padding: 20px; }
              img { max-width: 100%; height: auto; margin-bottom: 20px; }
              .product-info { margin-top: 20px; }
          </style>
      </head>
      <body>
          <h1>${product.title}</h1>
          <p>${product.description}</p>
          <p>Price: $${product.price}</p>
      </body>
      </html>
    `);
    newWindow.document.close();
  };

  const getFilteredAndSortedProducts = () => {
    let sortedProducts = [...products];

    if (sort === "price_asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "price_desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    return sortedProducts.filter(
      (product) =>
        (!minPrice || product.price >= minPrice) &&
        (!maxPrice || product.price <= maxPrice) &&
        (!filter || product.category === filter)
    );
  };

  return (
    <div className="pageBody">
      <div className={classes.productsContainer}>
        <Navigation />
        <div className="container">
          <div className="line">
            <hr />
          </div>
          <div className="btns">
            {" "}
            <div className="main_page">
              <button>Main Page</button>
            </div>
            <div className="all_products_page">
              <button>All products</button>
            </div>
          </div>

          <div>
            {/* Минимальная цена: */}
            <label>Price </label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            {/* Максимальная цена: */}
            <label> </label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <label>
              Discounted Items
              <input
                type="checkbox"
                checked={showDiscounted}
                onChange={() => setShowDiscounted(!showDiscounted)}
              />
            </label>
<div className={classes.productSort}>Sorted</div>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>Sorted
              <option value="">by default</option>
              {/* цена по возрастанию */}
              <option value="price_asc">price ascending</option>
              {/* цена по убыванию */}
              <option value="price_desc">price descending</option>
            </select>
          </div>
          <div className={classes.allProductsCardsContainer}>
            {getFilteredAndSortedProducts().map((product) => (
              <div
                key={product.id}
                className={classes.allProductsCards}
                onClick={() => openProductDetails(product)}
              >
                <img
                  src={`http://127.0.0.1:3333${product.image}`}
                  alt={product.title}
                  className={classes.productImage}
                />
                <div className={classes.description}>
                  <div className={classes.title}>{product.title}</div>
                  <div className={classes.priceInfo}>
                    <div className={classes.price}>${product.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={classes.contact_map}>
            <Contact />
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
