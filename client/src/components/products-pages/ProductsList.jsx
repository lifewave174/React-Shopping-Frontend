import { useContext } from 'react';
import { CandlesContext } from '../../context/CandlesProvider';
import ProductItem from './ProductItem';

const ProductList = () => {
  const candlesData = useContext(CandlesContext);
  const renderedList = candlesData.map((candle) => {
    return <ProductItem key={candle.productName} candle={candle} />;
  });
  return <div className="products-list">{renderedList}</div>;
};

export default ProductList;
