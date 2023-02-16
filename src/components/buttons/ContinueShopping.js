import React from 'react';
import { Link } from 'react-router-dom';

function ContinueShopping() {
  return (
    <>
      <Link to={`/books`} className='link-btn'>
        Continue Shopping
      </Link>
    </>
  );
}

export default ContinueShopping;
