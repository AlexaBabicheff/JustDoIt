import React, { useState, useEffect } from 'react';

import classes from './Sale.module.css';
import { serverUrl } from '../../Config';

const Sale = () => {
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        const productsAllUrl = `${serverUrl}/products/all`
        fetch(productsAllUrl)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => console.error(error));
    }, []);

    const filteredProducts = products.filter(product => product.discont_price !== null);
    const calculateDiscountPercentage = (price, discountPrice) => {
        const discount = price - discountPrice;
        const discountPercentage = Math.round((discount / price) * 100);
        return discountPercentage;
    };

    return (
        <div className={classes.saleContainer}>
                <div className={classes.saleContainerHeader}>
                    <div><p>Sale</p></div>
                    <div className={classes.line}><hr /></div>
                    <div className={classes.saleButton}>
                    <button><a href='#'>All sales</a></button>
                    </div>
                </div>
                <div className={classes.saleCardsContainer}>
    {filteredProducts.slice(0, 4).map(product => (
        <div key={product.id} className={classes.saleCard} style={{ position: 'relative', overflow: 'hidden' }}>
            <img src={`${serverUrl}` + product.image} alt={product.title} />
            <div className={classes.discountLabel}>- { calculateDiscountPercentage(product.price, product.discont_price) }%</div>
            <div className={classes.description}>
                <div className={classes.title}>{product.title}</div>
                <div className={classes.priceInfo}>
                    <div className={classes.price}>${product.price}</div>
                    <div className={classes.dicountPrice}>${product.discont_price}</div>
                </div>
            </div>
        </div>
    ))}
</div>
        </div>
    );
}

export default Sale;