import {
  ADD_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  GET_ALL_PRODUCTS,
  REMOVE_CART,
} from './actionTypes';
const initialState = {
  _products: [],
  carts: [],
  numberCart: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        _products: [...action.payload],
      };
    case ADD_CART:
      if (state.numberCart === 0) {
        const { id, title, price } = action.payload;
        let cart = {
          id,
          title,
          price,
          quantity: 1,
        };
        state.carts.push(cart);
      } else {
        let flag = false;
        state.carts.map((item, key) => {
          if (item.id === action.payload.id) {
            item.quantity++;
            flag = true;
          }
        });
        if (!flag) {
          const { id, title, price } = action.payload;
          let cart = {
            id,
            title,
            price,
            quantity: 1,
          };
          state.carts.push(cart);
        }
      }
      return { ...state, numberCart: state.numberCart + 1 };
    case INCREASE_QUANTITY:
      let cart = state.carts.find((item) => item.id === action.payload);
      let product = state._products.find((item) => item.id === action.payload);
      if (cart.quantity < product.quantity) {
        state.numberCart++;
        state.carts.map((cart) => {
          if (cart.id === action.payload) {
            cart.quantity++;
          }
        });
      }

      //state.carts[action.payload].quantity++;
      return { ...state };
    case DECREASE_QUANTITY:
      let { quantity } = state.carts.find((item) => item.id === action.payload);
      if (parseInt(quantity) > 1) {
        state.numberCart--;
        state.carts.map((cart) => {
          if (cart.id === action.payload) {
            cart.quantity--;
          }
        });
      }
      return { ...state };
    case REMOVE_CART:
      let removeCart = state.carts.find((item) => item.id === action.payload);
      return {
        ...state,
        numberCart: state.numberCart - removeCart.quantity,
        carts: state.carts.filter((cart) => cart.id !== action.payload),
      };

    default:
      return state;
  }
};
