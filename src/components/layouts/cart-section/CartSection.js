import React, { useContext } from 'react';
import './CartSection.styles.css';
import { FaPlusCircle } from 'react-icons/fa';
import { FaMinusCircle } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

import CartContext from '../../../context/cart/CartContext';
import ContinueShopping from '../../buttons/ContinueShopping';

function CartSection() {
  const {
    cartItems,
    clearCart,
    increase,
    decrease,
    removeFromCart,
    itemCount,
    total,
    totalItems,
  } = useContext(CartContext);

  return (
    <section className='container'>
      <div className='title-cart'>
        <h1>Your Shoping Cart</h1>
      </div>
      {cartItems.length > 0 ? (
        <>
          <article className='wrapper'>
            <div className='table'>
              <div className='row-header'>
                <div className='cell'>
                  <h5>Book</h5>
                </div>
                <div className='cell'>
                  <h5>Price</h5>
                </div>
                <div className='cell'>
                  <h5>Quantity</h5>
                </div>
                <div className='cell'>
                  <h5>Subtotal</h5>
                </div>
                <div className='cell'></div>
              </div>
              {cartItems.map((bookData) => {
                const {
                  id,
                  quantity,
                  book_name,
                  book_url,
                  price,
                  author_name,
                } = bookData;
                return (
                  <div key={id}>
                    <div className='row-body'>
                      <div className='cell'>
                        <div className='title'>
                          <img src={book_url} alt={book_name} />
                          <div className='book-name-author'>
                            <h3>{book_name}</h3>
                            <p>{author_name}</p>
                          </div>
                        </div>
                      </div>

                      <div className='cell-display-none'>
                        <div className='book-price-cart'>
                          <p>&euro; {price}</p>
                        </div>
                      </div>
                      <div className='cell-quantity'>
                        <div className='quantity'>
                          <FaPlusCircle
                            className='quantity-btns'
                            onClick={() => increase(bookData)}
                          />
                          <h5>{quantity}</h5>
                          {quantity > 1 ? (
                            <FaMinusCircle
                              className='quantity-btns'
                              onClick={() => decrease(bookData)}
                            />
                          ) : (
                            quantity === 1 && (
                              <FaMinusCircle
                                className='quantity-btns'
                                onClick={() => removeFromCart(bookData)}
                              />
                            )
                          )}
                        </div>
                      </div>
                      <div className='cell'>
                        <div className='book-price-cart-subtotal'>
                          <p>&euro; {parseInt(price) * quantity}</p>
                        </div>
                      </div>
                      <div className='cell'>
                        <div className='trash-btn'>
                          <FaTrash onClick={() => removeFromCart(bookData)} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          {/* <hr className='line-bottom' /> */}
          <div className='link-btn-container'>
            <ContinueShopping />
            <button className='link-btn clear-btn' onClick={clearCart}>
              Clear Shopping Cart
            </button>
          </div>

          <div className='totals-container'>
            <article className='order-totals'>
              <h3>
                Subtotal: <span>&euro; {itemCount}</span>
              </h3>
              <p>
                Shipping Fee: <span>&euro; 3.00</span>
              </p>
              <p>
                Total Books: <span>{totalItems}</span>
              </p>
              <hr />
              <h2>
                Order Total: <span>&euro; {total}</span>
              </h2>
            </article>
          </div>
        </>
      ) : (
        <div className='no-items-cart'>
          <p>There are no books in your shopping cart.</p>
          <ContinueShopping />
        </div>
      )}
    </section>
  );
}

export default CartSection;
