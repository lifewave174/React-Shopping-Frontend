import React from 'react';

const ProductItem = ({ candle }) => {
  return (
    <div className="product-item">
      <img
        src={candle.image}
        alt={candle.productName}
        className="product-image"
      />
      <p className="product-name">{candle.productName}</p>
      <p className="product-price">{candle.price}$</p>
    </div>
  );
};

export default ProductItem;
