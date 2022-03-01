import React from 'react';
import Wrapper from './cartItem-style';
import { formatPrice } from '../../utils/helpers';
import AmountButtons from './../amountButtons/AmountButtons';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../../context/cart_context';
const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {};
  const decrease = () => {};
  return (
    <Wrapper>
      <div className='title'>
        <img src={image} alt={name} />
      </div>
    </Wrapper>
  );
};

export default CartItem;
