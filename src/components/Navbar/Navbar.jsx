// import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">KATO Shop</a>
      </div>
      <ul className="navbar-menu">
        <li><a href="/">Home</a></li>
        <li className="dropdown">
          <a href="/shop">Shop</a>
          <div className="dropdown-content">
            <a href="/shop/casual">Casual</a>
            <a href="/shop/office">Office</a>
            <a href="/shop/party">Party</a>
            <a href="/shop/sports">Sports</a>
          </div>
        </li>
        <li><a href="/Lookbook">Lookbook</a></li>
        <li><a href="/Blog">Blog</a></li>
        <li><a href="/AboutUs">About Us</a></li>
        <li><a href="/ContactUs">Contact Us</a></li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-icons">
        <a href="/shopping-cart" className="cart-icon">🛒</a>
        <div className="user-dropdown">
          <a href="/login-register">Login/Register</a>
          <div className="user-dropdown-content">
            <a href="/my-account">My Account</a>
            <a href="/admin-page">Admin Panel</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
