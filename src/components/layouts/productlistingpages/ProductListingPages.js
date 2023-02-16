import React from 'react';
import './ProductListingPages.styles.css';
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';

function ProductListingPages({booksdata}) {
  return (
    <section className='product-listing-all-containers'>
      <div className='container'>
        <div className='grid-container'>

          {booksdata.map((book, id) => {
              return (
                <div key={id} className='grid-item'>
                  <ProductListingCard bookData={book} />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default ProductListingPages;
