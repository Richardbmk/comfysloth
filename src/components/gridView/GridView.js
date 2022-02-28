import React from 'react';
import Wrapper from './gridView-style';
import Product from './../product/Product';

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className='products-container'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

export default GridView;
