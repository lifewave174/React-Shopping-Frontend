import React from 'react';
import ProductsList from './ProductsList';

const ProductsPage = () => {
  return (
    <div className="products-page">
      <div className="heading">
        <h1>Products</h1>
        <p>Order homemade candles for you or your beloved ones</p>
      </div>
      <div className="products-page">
        <ProductsList />
      </div>
    </div>
  );
};

export default ProductsPage;
