import axios from 'axios';
import {
  ADD_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  GET_ALL_PRODUCTS,
  REMOVE_CART,
} from './actionTypes';

export const fetchAllProducts = () => {
  return (dispatch) => {
    return axios
      .get('products.json')
      .then((res) => dispatch(getAllProducts(res.data)));
  };
};
export const getAllProducts = (payload) => {
  return {
    type: GET_ALL_PRODUCTS,
    payload,
  };
};
export const addCart = (payload) => {
  return {
    type: ADD_CART,
    payload,
  };
};
export const increment = (payload) => {
  return {
    type: INCREASE_QUANTITY,
    payload,
  };
};
export const decrement = (payload) => {
  return {
    type: DECREASE_QUANTITY,
    payload,
  };
};

export const remove_cart = (payload) => {
  return {
    type: REMOVE_CART,
    payload,
  };
};
