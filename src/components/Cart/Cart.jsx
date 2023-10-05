import './Cart.css';
import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    const total = cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
    const totalShipping = cart.reduce((accumulator, currentValue) => accumulator+ currentValue.shipping, 0);
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price : </p>
            <p>Total Shipping : {totalShipping}</p>
            <h6>Grand Total :{total}</h6>
        </div>
    );
};

export default Cart;