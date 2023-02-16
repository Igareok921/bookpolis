import React, { useState, useEffect, useContext } from 'react';
import './DetailsSection.styles.css';
import { useParams } from 'react-router-dom';
import { BooksData } from '../../../books-data/BooksData';
import ContinueShopping from '../../buttons/ContinueShopping';

function DetailsSection() {
  const { id } = useParams();
  const [bookData, setBookData] = useState({});

  useEffect(() => {
    let newData = BooksData.filter((book) => book.id === id);

    setBookData(newData[0]);
  }, [id]);

  return (
    <section className='detail-section-container'>
      <div className='container'>
        <div className='flex-container'>
          <div className='image-book-container'>
            <img src={bookData.book_url} alt='book' />
          </div>

          <div className='book-detail-container'>
            <div className='title-author-book'>
              <h2 className='book-name-detail'>{bookData.book_name}</h2>
              <h3>{bookData.author_name}</h3>
            </div>
<div className="description-container-details">
  <p className='description-book'>{bookData.book_description}</p>
            <p>
              <b>Language :</b> {bookData.language}
            </p>
            <p>
              <b>Book Length :</b> {bookData.print_length}
            </p>
</div>
            
            <ContinueShopping className='continue-shopping-detail' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailsSection;
