import React from 'react';
import './Product.css';
const Product = (props) => {
    const {img,name,price,stock,ratings,seller, quantity} = props.product;
    return (
        <div className = "product">
            <img src={img} alt="Fetching image from api failed." />
            <h2>{name}</h2>
            <h3>Price : {price}</h3>
            <h3>Available stock : {stock}</h3>
            <small>Rating : {ratings}</small>
        </div>
    );
};

export default Product;