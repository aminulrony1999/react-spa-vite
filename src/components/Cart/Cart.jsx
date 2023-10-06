import './Cart.css';
import React from 'react';

const Cart = (props) => {
    const {cart} = props;

    const totalPrice = cart.reduce((accumulator, currentValue) => accumulator + (currentValue.price * (currentValue.quantity || 1)), 0);
    const totalShipping = cart.reduce((accumulator, currentValue) => accumulator+ (currentValue.shipping * (currentValue.quantity || 1)), 0);
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + tax;
    const totalProduct = cart.reduce((accumulator, currentValue) => accumulator+ (currentValue.quantity || 1), 0);

    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {totalProduct}</p>
            <p>Toatl Price : ${totalPrice}</p>
            <p>Shipping : ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;