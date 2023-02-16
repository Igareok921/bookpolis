import React from 'react';
import './searchInputForm.styles.css';
import { FaSearch } from 'react-icons/fa';

function SearchInputForm({ searchTerm, onSearchTermChange }) {
  return (
    <div className='search-input-form-container'>
      <input
        type='text'
        value={searchTerm}
        className='search-input'
        placeholder='Search Books'
        onChange={onSearchTermChange}
      />
      <FaSearch className='search-icon'/>
    </div>
  );
}

export default SearchInputForm;
