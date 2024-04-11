import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useParams } from 'react-router-dom';
import {connect} from 'react-redux';
import { addItem } from '../Cart/cart.actions';
import classes from './OneProductComponent.module.css';
import { serverUrl } from '../../Config';
import iconHeart from '../Navigation/HeaderImg/heart.svg';
import Button from '../Button/Button.component.jsx';
import ProductCounter from '../ProductCounter/ProductCounter.jsx';


const OneProductComponent = ({ addItem }) => {
    const [product, setProduct] = useState(null);
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const { id } = useParams();
    const navigate = useNavigate(); 

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


    const handleAddToCart = () => {
        if (count > 0) {
            addItem({ ...product, quantity: count });
            setCount(0); 
        }
    };


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
        <ProductCounter count={count} setCount={setCount} increment={increment} decrement={decrement} /> 
        <div className="manualInput">
    <input 
        type="number"
        value={count}
        onChange={(e) => {
            const newValue = parseInt(e.target.value);
            setCount(newValue >= 0 ? newValue : 0); // 
        }}
    />
</div>
        <div className="check_out">
            <Button onClick={handleAddToCart}>Add to cart</Button>
        </div>
        <h6>Description</h6>
        <h3>{product.description}</h3>
        <a href="#"><h4>Read more</h4></a>
    </div>
            <div className={classes.like}>
            <img src={iconHeart} alt="Icon" />
            </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  })

export default connect(null, mapDispatchToProps)(OneProductComponent);

