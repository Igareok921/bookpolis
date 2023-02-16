import {
  SEARCH_FILTER,
  REMOVE_ITEM,
  ADD_TO_CART,
  INCREASE,
  DECREASE,
  CLEAR,
  CLEAR_SEARCH,
} from './CartTypes.js';

import { SHIPPING_FEE } from '../../utils';

// Save the cartItems to local storage
const Storage = (cartItems) => {
  localStorage.setItem(
    'cartItems',
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

// Export function to calculate the total price of the cart and the total quantity of the cart

export const sumItems = (cartItems) => {
  Storage(cartItems);

  let totalItems = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );

  let itemCount = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  let total = cartItems
    .reduce(
      (total, product) => total + product.price * product.quantity,
      SHIPPING_FEE
    )
    .toFixed(2);
  return { itemCount, total, totalItems };

};

// The reducer is listening for an action, which is the type that we defined in the CartTypes.js file
const CartReducer = (state, action) => {
  // The switch statement is checking the type of action that is being passed in
  switch (action.type) {
    // If the action type is ADD_TO_CART, we want to add the item to the cartItems array
    case ADD_TO_CART:
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (cartItem) {

        state.cartItems[
          state.cartItems.findIndex((item) => item.id === action.payload.id)
        ].quantity++;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    // If the action type is REMOVE_ITEM, we want to remove the item from the cartItems array
    case REMOVE_ITEM:
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.payload.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload.id),
        ],
      };

    // If the action type is INCREASE, we want to increase the quantity of the particular item in the cartItems array
    case INCREASE:
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity++;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    // If the action type is DECREASE, we want to decrease the quantity of the particular item in the cartItems array
    case DECREASE:
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.payload.id)
      ].quantity--;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };

    //If the action type is CLEAR, we want to clear the cartItems array
    case CLEAR:
      return {
        cartItems: [],
        ...sumItems([]),
      };

    case SEARCH_FILTER:
      return {
        ...state,
        search: state.cartItems.filter((item) => {
          const searchBook = new RegExp(`${action.payload}`, 'ig');
          return (
            item.book_name.match(searchBook) ||
            item.author_name.match(searchBook)
          );
        }),
      };

    case CLEAR_SEARCH:
      return {
        ...state,
        filtered: null,
      };

    //Return the state if the action type is not found
    default:
      return state;
  }
};

export default CartReducer;
