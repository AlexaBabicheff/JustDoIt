// import Categories from "../../Categories/Categories";
// import CategoriesLink from "../../CategoriesLink/CategoriesLink";
// import Navigation from "../../Navigation/Navigation";
// import Contact from "../../Contact/Contact";
// import Map from "../../Map/Map";

// const CategoriesGoods = () => {
//   return (
//     <div className="pageBody">
//       <Navigation />
//       <div className="container">
//       <div className="line"><hr />
//       </div>
//       <div className="btns">
//         <div className="main_page">
//           <button>Main Page</button>
//         </div>
//         <div className="categories_page">
//           <button>Categories</button>
//         </div>
//       </div>
//       <div className="categories_component">
//       <CategoriesLink />
        
//       </div>
      
//       <div className="contact_component">
//         <Contact />
//       </div>
//       <div className="map_component">
//         <Map />
//       </div>
//       </div>
//     </div>
//   );
// };

// export default CategoriesGoods;


// Alesja

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './CategoriesGoods.module.css';
import { serverUrl } from '../../../Config';

const OneProductComponent = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const oneProduct = `${serverUrl}products/${id}`
        console.log(oneProduct);
        fetch(oneProduct)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProduct(data[0]);
            }) 
            .catch((error) => console.error(error));
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    console.log(product.data)

    return (
        <div className={classes.OneProductContainer}>
            <div className={classes.OneProductsContainerHeader}>
                <h1>{product.title}</h1>
            </div>
            <div className={classes.OneProductDescription}>
            <img src={`${serverUrl}/${product.image}`} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Price: {product.price}</p>
            </div>
        </div>
    );
};

export default OneProductComponent;


