import React from 'react';
import Navbar from '../../components/layouts/navbar/Navbar';
import DetailsSection from '../../components/layouts/details-section/DetailsSection';
import Footer from '../../components/layouts/footer/Footer';

function BookDetails() {
  return (
    <section>
      <Navbar darkNav={true} />

      <DetailsSection />
      <Footer />
    </section>
  );
}

export default BookDetails;
