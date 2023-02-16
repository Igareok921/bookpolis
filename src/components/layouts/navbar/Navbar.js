import React, { useState, useContext, useEffect } from 'react';
import './navbar.styles.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

import CartContext from '../../../context/cart/CartContext';

function Navbar({ darkNav }) {
  const { totalItems } = useContext(CartContext);
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820) {
        setIsResponsive(false);
      }
    };
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className={`navbar-container ${
        darkNav ? 'background-dark relative' : 'background-transparent'
      }`}
    >
      <div className='wrap-container'>
        <Link to='/' className='logo-name'>
          | Bookpolis |
        </Link>

        <div
          className={isResponsive ? 'nav-links-mobile' : 'nav-links-menu'}
          onClick={() => setIsResponsive(false)}
        >
          <div></div>
          <Link to='/' className='nav-links'>
            Home
          </Link>

          <Link to='/books' className='nav-links'>
            Books
          </Link>
          <Link to={`/book-cart`} className='cart-icon-btn'>
            <span className='cart-icon'>
              <FaShoppingCart />
            </span>
            {totalItems > 0 && <span className='cart-value'>{totalItems}</span>}
          </Link>
        </div>

        <button
          className='menu-icon'
          onClick={() => setIsResponsive(!isResponsive)}
        >
          {isResponsive ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </section>
  );
}

export default Navbar;
