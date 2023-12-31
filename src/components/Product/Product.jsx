import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
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
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                Add to Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;