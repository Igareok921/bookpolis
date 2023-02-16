import React from 'react';
import { Link } from 'react-router-dom';
import './footer.styles.css';
function footer() {
  return (
    <section className='footer-container'>
      <div className='container-center-footer'>
        <h2>If you have any queries feel free to ask here</h2>

        <form className='footer-form'>
          <div className='form-group'>
            <label htmlFor='name' className='form-label'>
              Name:
            </label>
            <input
              type='text'
              id='name'
              className='form-input'
              placeholder='Enter you name'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email' className='form-label'>
              Email:
            </label>
            <input
              type='email'
              className='form-input'
              id='email'
              placeholder='Enter your email'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='query' className='form-label'>
              Query:
            </label>
            <textarea
              className='form-input'
              id='query'
              placeholder='Type your Query'
            ></textarea>
          </div>
          <div className='form-group'>
            <Link to='/' className='form-submit'>
              Submit
            </Link>
          </div>
        </form>
        <p>&copy; Igor Sirghii. All Rights Reserved.</p>
      </div>
    </section>
  );
}

export default footer;
