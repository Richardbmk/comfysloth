import React from 'react';
import Wrapper from './pageHero-style';
import { Link } from 'react-router-dom';

const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home</Link>
          {product && <Link to='/products'>/Products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

export default PageHero;
