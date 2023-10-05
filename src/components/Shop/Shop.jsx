import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products, setProducts]  = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    useEffect(() => {
        const storedCart = getShoppingCart();
        for(const id in storedCart){
            const savedProduct = products.find(product => product.id === id)
            console.log(savedProduct);
        }
    },[products])

    const handleAddToCart = (product) =>{
    setCart([...cart,product]);
    addToDb(product.id);
    }
   
    return (
        <div className = 'shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product product = {product} key ={product.id} handleAddToCart = {handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;