import React from "react";
import { useProductsContext } from "../../context/products_context";
import { Link } from "react-router-dom";
import Wrapper from "./featuredProducts-style";
import Error from ".././error/Error";
import Loading from ".././loading/Loading";
import Product from ".././product/Product";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featured.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

export default FeaturedProducts;
