import React from 'react';
import Wrapper from './amountButtons-style';
import { FaPlus, FaMinus } from 'react-icons/fa';

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <Wrapper className='amount-btns'>
      <button type='button' className='amount-btn' onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className='amount'>{amount}</h2>
      <button type='button' className='amount-btn' onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

export default AmountButtons;
