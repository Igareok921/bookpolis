import React from 'react'
import Navbar from '../../components/layouts/navbar/Navbar'
import CartSection from '../../components/layouts/cart-section/CartSection'
import Footer from '../../components/layouts/footer/Footer'
function BookCartPage() {
  return (
    <section>
     <Navbar darkNav={true} />
     <CartSection />
     <Footer />
    </section>
  )
}

export default BookCartPage