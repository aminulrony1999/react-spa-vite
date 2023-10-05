import './Cart.css';
import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    const total = cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price : </p>
            <p>Total Shipping : </p>
            <p>Tax</p>
            <h6>Grand Total :{total}</h6>
        </div>
    );
};

export default Cart;