import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    // let total = 0;
    // for (const product of cart) {
    //     total = total + product.price;
    // }
    const total = cart.reduce((previous, product) => previous + product.price, 0)

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal= total + tax + shipping;
    return (
        <div className="cart">
            <h3>Purchasing Summary</h3>
            <h4>Items Ordered: {props.cart.length}</h4>
            <h4>Price: ${total.toFixed(2)}</h4>
            <h4>Shipping: ${shipping.toFixed(2)}</h4>
            <h4>Tax/Vat: ${tax.toFixed(2)}</h4>
            <h3>Total Price: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;