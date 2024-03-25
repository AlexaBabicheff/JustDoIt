import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './OneProductComponent.module.css';
import { serverUrl } from '../../Config';

const OneProductComponent = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const oneProduct = `${serverUrl}/products/${id}` 
        fetch(oneProduct)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data.data);
            }) 
            .catch((error) => console.error(error));
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

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