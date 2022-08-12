import React from 'react';
import Wrapper from './contact-style';

const Contact = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>Join our newsletter and get 20% off</h3>
        <div className='content'>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            explicabo tempora incidunt accusamus soluta nulla officiis magnam
            accusantium facere repudiandae?{' '}
          </p>
          <form
            action='https://formspree.io/f/myyvyjyy'
            method='POST'
            className='contact-form'
          >
            <input
              type='email'
              name='email'
              className='form-input'
              placeholder='enter email'
            />
            <button type='submit' className='submit-btn'>
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
