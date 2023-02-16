import React from 'react';
import './ProductListingCard.styles.css';
import CartContext from '../../../context/cart/CartContext';
import { Link } from 'react-router-dom';

function ProductListingCard({ bookData }) {
  
  const { addToCart } = React.useContext(CartContext);
  return (
    <div className='product-listing-card'>
      <div className='product-listing-img-container'>
        <img
          src={bookData.book_url}
          alt='book'
          className='product-listing-image'
        />
      </div>
      <div className='product-listing-details-container'>
        <h3>{bookData.book_name}</h3>
        <p className='author-name-card'>{bookData.author_name}</p>
        <Link to={`/book-details/${bookData.id}`} className='details-link'>
          Details
        </Link>
      </div>

      <button
        className='product-listing-btn'
        onClick={() => addToCart(bookData)}
      >
        <span className='price'>&euro; {bookData.price}</span>
        <span className='buy'>Add To Cart</span>
      </button>
    </div>
  );
}

export default ProductListingCard;
