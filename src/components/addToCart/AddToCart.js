import React, { useState } from 'react';
import Wrapper from './addToCart-style';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useCartContext } from '../../context/cart_context';
import AmountButtons from './../AmountButtons';

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;

  const [mainColor, setMainColor] = useState(colors[0]);
  return (
    <Wrapper>
      <div className='colors'>
        <span>colors : </span>
        <div className=''>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`${
                  mainColor === color ? 'color-btn active' : 'color-btn'
                }`}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default AddToCart;
