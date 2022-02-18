import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useProductsContext } from '../../context/products_context';
import { single_product_url as url } from '../../utils/constants';
import { formatPrice } from '../../utils/helpers';
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../../components';
import Wrapper from './singleProductPage-style';
import { Link } from 'react-router-dom';

const SingleProductPage = () => {
  const { id } = useParams();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  console.log(product);

  return <h4>single product page</h4>;
};

export default SingleProductPage;
