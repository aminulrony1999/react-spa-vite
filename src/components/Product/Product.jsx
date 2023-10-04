import React from 'react';
import './Product.css';
const Product = (props) => {
    const {name,price,stock,ratings} = props.product;
    return (
        <div>
            <h2>{name}</h2>
            <h3>Price : {price}</h3>
            <h3>Available stock : {stock}</h3>
            <small>Rating : {ratings}</small>
        </div>
    );
};

export default Product;