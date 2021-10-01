import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [uiProducts, setUiProducts] = useState([]);

    useEffect(()=> {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON")
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setUiProducts(data)
        })
    }, [])

    const handleCartData = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        
        setUiProducts(matchedProducts);
    }

    return (
        <div>
            <div className="search-container">
                <input onChange={handleSearch} placeholder=" Search items" type="text" />
            </div>
            <div className="shop-container">
            <div className="product-container">
                {
                    uiProducts.map(product => <Products 
                        product = {product}
                        key = {product.key}
                        handleCartData = {handleCartData}
                    >                    
                    </Products>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
        </div>
    );
};

export default Shop;