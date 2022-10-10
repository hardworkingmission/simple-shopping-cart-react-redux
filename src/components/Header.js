import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const items = useSelector((state) => state.cartProduct.numberCart);
  return (
    <div className=" p-5 shadow-lg mb-5">
      <ul className="flex justify-between">
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to="carts">
            Cart
            <sup>
              <span className="p-1 h-2 w-2 rounded-[20px]  bg-blue-400 text-white font-bold">
                {items}
              </span>
            </sup>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
