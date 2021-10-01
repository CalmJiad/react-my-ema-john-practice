import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Products.css';
import Rating from 'react-rating';

const element = <FontAwesomeIcon icon={faShoppingCart} />
const Products = (props) => {
    const { name, img, price, seller, stock, star } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h2>{name}</h2>
                <p><small>By: {seller}</small></p>
                <h3>Price: ${price}</h3>
                <p>We have only {stock} products left! Order now!</p>
                <p>Rating: <Rating
                    initialRating={star}
                    emptySymbol="far fa-star star-icon"
                    fullSymbol="fas fa-star star-icon"
                    readonly
                ></Rating></p>
                <button className="purchase-btn" onClick={() => props.handleCartData(props.product)}>{element} Add To Cart</button>
            </div>
        </div>
    );
};

export default Products;