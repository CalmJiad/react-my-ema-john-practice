import React from 'react';
import './Header.css';
import logo from './../../images/logo.png'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/inventory">Inventory</a>
                <a href="/review">Order Review</a>
            </nav>
        </div>
    );
};

export default Header;