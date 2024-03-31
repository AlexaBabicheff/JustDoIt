import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './OneProductComponent.module.css';
import { serverUrl } from '../../Config';
import iconHeart from '../Navigation/HeaderImg/heart.svg'

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

                {/* <h1>{product.title}</h1> */}
                
            <div className={classes.OneProductImg}>
            <img src={`${serverUrl}/${product.image}`} alt={product.title} />
            </div>
            <div className={classes.OneProductDescription}>
                <h2>{product.title}</h2>
                <h5>$ {product.price}</h5>
                <div className="check_out">
            <button>Add to cart</button>
          </div>
                <h6>Description</h6>
                <h3>{product.description}</h3>
                <link rel="stylesheet" href="" />
                <a href=""><h4>Read more</h4></a>
            </div>
            <div className={classes.like}>
            <img src={iconHeart} alt="Icon" />
            </div>
            </div>
        </div>
    );
};

export default OneProductComponent;

