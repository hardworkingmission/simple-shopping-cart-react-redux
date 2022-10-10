import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../redux/cart/actions';
import Product from './Product';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cartProduct._products);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  console.log(Object.keys(products));
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
      {products?.map((product) => (
        <Product key={product.title} product={product} />
      ))}
    </div>
  );
};

export default Products;
