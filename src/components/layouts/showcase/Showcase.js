import React from 'react';
import './showcase.styles.css';
import Navbar from '../navbar/Navbar';
import SearchInputForm from '../../forms/searchInputForm/SearchInputForm';


function Showcase({ onSearchTermChange, searchTerm }) {
  return (
    <section className='showcase-container'>
      <Navbar darkNav={false} />
      <div className='overlay'></div>
      <div className='showcase-content'>
        <h1>
          Best Books <span className='span-h1'>Available</span>
        </h1>
        <p>
          Buy <span className='span-p'>quality books</span> at cheaper price
        </p>
        <SearchInputForm
          onSearchTermChange={onSearchTermChange}
          searchTerm={searchTerm}
        />
      </div>
    </section>
  );
}

export default Showcase;
