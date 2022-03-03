import React from 'react';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Wrapper from './cartButtons-style';
import { useProductsContext } from '../../context/products_context';
import { useCartContext } from '../../context/cart_context';
import { useUserContext } from '../../context/user_context';

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();

  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{total_items}</span>
        </span>
      </Link>
      {myUser ? (
        <button
          type='button'
          className='auth-btn'
          onClick={() => logout({ returnTO: window.location.origin })}
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <button type='button' className='auth-btn' onClick={loginWithRedirect}>
          Login <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

export default CartButtons;
