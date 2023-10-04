import React from 'react';
import './Product.css';
const Product = (props) => {
    const {img,name,price,stock,ratings,seller, quantity} = props.product;
    return (
        <div className = "product">
            <img src={img} alt="Fetching image from api failed." />
            <div className="product-info">
            <h6 className ='product-name'>{name}</h6>
            <p>Price : ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating : {ratings} Stars</p>
            </div>
        </div>
    );
};

export default Product;