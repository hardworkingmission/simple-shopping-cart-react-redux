import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, remove_cart } from '../redux/cart/actions';

const Cart = ({ product }) => {
  // const carts = useSelector((state) => state.cartProduct.carts);
  // let cart = carts.find((item) => item.id === product.id);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center bg-white py-4 px-2 shadow-md rounded-lg my-4 mx-4">
      <div className="w-5/6 flex justify-between border-b-2 my-2">
        <div className="text-lg py-2">
          <p>{product?.title}</p>
        </div>
        <div className="text-lg py-2">
          <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
            <button
              className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
              onClick={() => dispatch(decrement(product.id))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 12H6"
                />
              </svg>
            </button>
            <p>{product?.quantity}</p>
            <button
              className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
              onClick={() => dispatch(increment(product.id))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/6 flex text-lg justify-center items-center ">
        <button
          className="flex justify-center items-center text-white bg-red-600 h-[30px] w-[30px] rounded-[50%]  "
          onClick={() => dispatch(remove_cart(product.id))}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Cart;
