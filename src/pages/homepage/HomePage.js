// import React, { useEffect, useState } from 'react';
// import Showcase from '../../components/layouts/showcase/Showcase';
// import ProductListing from '../../components/layouts/productlisting/ProductListing';
// import Footer from '../../components/layouts/footer/Footer';
// import { BooksData } from '../../books-data/BooksData';

// function HomePage() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [booksdata, setBooksData] = useState([]);

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   useEffect(() => {
//     const searchTermLowerCase = searchTerm.toLowerCase();
//     const filterBooks = booksdata.filter(
//       (book) =>
//         book.book_name.toLowerCase().includes(searchTermLowerCase) ||
//         book.author_name.toLowerCase().includes(searchTermLowerCase)
//     );
//     setBooksData(filterBooks);
//     if (searchTerm === '') {
//       setBooksData(BooksData);
//     }
//   }, [searchTerm]);

//   return (
//     <section>
//       <Showcase onSearchTermChange={handleChange} searchTerm={searchTerm} />
//       <ProductListing booksdata={booksdata} searchTerm={searchTerm} />

//       <Footer />
//     </section>
//   );
// }

// export default HomePage;
import React, { useEffect, useState } from "react";
import Showcase from "../../components/layouts/showcase/Showcase";
import ProductListing from "../../components/layouts/productlisting/ProductListing";
import Footer from "../../components/layouts/footer/Footer";
import { BooksData } from "../../books-data/BooksData";

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [booksdata, setBooksData] = useState(BooksData);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    const filterBooks = BooksData.filter(
      (book) =>
        book.book_name.toLowerCase().includes(searchTermLowerCase) ||
        book.author_name.toLowerCase().includes(searchTermLowerCase)
    );
    setBooksData(filterBooks);
    if (searchTerm === "") {
      setBooksData(BooksData);
    }
  }, [searchTerm]);

  return (
    <section>
      <Showcase onSearchTermChange={handleChange} searchTerm={searchTerm} />
      <ProductListing booksdata={booksdata} searchTerm={searchTerm} />

      <Footer />
    </section>
  );
}

export default HomePage;
