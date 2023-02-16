import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import BooksPage from './pages/bookspage/BooksPage';
import BookDetailsPage from './pages/bookdetailspage/BookDetails';
import BookCartPage from './pages/bookcartpage/BookCartPage';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/books' element={<BooksPage />} />
        <Route path='/book-details/:id' element={<BookDetailsPage />} />
        <Route path='/book-cart' element={<BookCartPage />} />
      </Routes>
    </div>
  );
};

export default App;
