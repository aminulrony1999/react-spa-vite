import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts]  = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);
    const handleAddToCart = (product) =>{
    setCart([...cart,product]);
    }
    return (
        <div className = 'shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product product = {product} key ={product.id} handleAddToCart = {handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;