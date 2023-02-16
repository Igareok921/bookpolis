import React from 'react';
import './productListing.styles.css';
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';




function ProductListing({ booksdata,}) {
  return (
    <div className='product-listing-container'>
      <div className='container'>
        <h2 className='popular-books'>
          Here are some <span className='text-primary'>books</span> that you
          might like
        </h2>
        <div className='grid-container'>
          {booksdata.slice(0, 5).map((book, id) => (
            <div key={id} className='grid-item'>
              <ProductListingCard  bookData={book} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListing;