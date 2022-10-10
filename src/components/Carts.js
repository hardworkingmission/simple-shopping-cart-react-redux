import React from 'react';
import { useSelector } from 'react-redux';
import Cart from './Cart';

const Carts = () => {
  const carts = useSelector((state) => state.cartProduct.carts);
  const totalItems = useSelector((state) => state.cartProduct.numberCart);
  let listCarts = [];
  let totalCart = 0;
  Object.keys(carts).forEach((item) => {
    totalCart += carts[item].quantity * carts[item].price;
    listCarts.push(carts[item]);
  });

  return (
    <div className="w-5/6 mx-auto flex">
      <div className="w-8/12">
        {listCarts.length > 0 ? (
          listCarts.map((cart) => <Cart key={cart.id} product={cart} />)
        ) : (
          <h1 className="text-2xl text-red-600 text-center">Cart Empty</h1>
        )}
      </div>
      <div className="w-4/12">
        <h3 className="text-center text-2xl font-bold">Summary</h3>
        <p className="text-center text-xl font-bold my-5">Items:{totalItems}</p>
        <p className="text-center text-xl font-bold my-5">
          Total Price:{totalCart}
        </p>
      </div>
    </div>
  );
};

export default Carts;
