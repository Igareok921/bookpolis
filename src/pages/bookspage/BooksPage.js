import React, { useEffect, useState } from 'react';
import Navbar from '../../components/layouts/navbar/Navbar';
import SearchInputForm from '../../components/forms/searchInputForm/SearchInputForm';
import './booksPage.styles.css';
import ProductListingPages from '../../components/layouts/productlistingpages/ProductListingPages';
import Footer from '../../components/layouts/footer/Footer';
import { BooksData } from '../../books-data/BooksData';
function BooksPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [booksdata, setBooksData] = useState(BooksData);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    const filterBooks = booksdata.filter(
      (book) =>
        book.book_name.toLowerCase().includes(searchTermLowerCase) ||
        book.author_name.toLowerCase().includes(searchTermLowerCase)
    );
    setBooksData(filterBooks);
    if (searchTerm === '') {
      setBooksData(BooksData);
    }
  }, [searchTerm, booksdata]);

  return (
    <section>
      <Navbar darkNav={true} />

      <div className='search-container'>
        <h2>
          Find the <span className='text-primary'>Books</span> that you want
        </h2>
        <SearchInputForm
          onSearchTermChange={handleChange}
          searchTerm={searchTerm}
        />
      </div>
      {booksdata.length ? (
        <ProductListingPages booksdata={booksdata} />
      ) : (
        <div>
          <h2>No books was found</h2>
        </div>
      )}

      <Footer />
    </section>
  );
}

export default BooksPage;
