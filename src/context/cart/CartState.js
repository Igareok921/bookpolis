import { useReducer } from 'react';
import CartContext from './CartContext';
import CartReducer from './CartReducer';
import { sumItems } from './CartReducer';
import { CLEAR_SEARCH } from './CartTypes';

//Local Storage
const storage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const CartState = ({ children }) => {
  //Initial State of the cart
  // const initialState = {
  //   cartItems: [],
  //   checkout: false,
  // };

  //⬆️⬆️   Change to local Storage    ⬆️⬆️
  const initialState = {
   cartItems:storage,
   ...sumItems(storage),
   
  }

  //Set up the reducer
  const [state, dispatch] = useReducer(CartReducer, initialState);

  //Function to handle when an item is added from the store into the cart
  const addToCart = (payload) => {
    dispatch({ type: 'ADD_TO_CART', payload});
  };
  //Function to handle when an item that is in the cart is added again
  const increase = (payload) => {
    dispatch({ type: 'INCREASE', payload });
  };
  //Function to handle when an item is removed from cart

  const decrease = (payload) => {
    dispatch({ type: 'DECREASE', payload });
  };

  //Function to remove an item from the cart
  const removeFromCart = (payload) => {
    dispatch({ type: 'REMOVE_ITEM', payload });
  };

  ////Function to clear the cart
  const clearCart = () => {
    dispatch({ type: 'CLEAR' });
  };


  const searchFilter =(text)=>{
dispatch({ type: 'SEARCH_FILTER', payload: text });
  }
 
  const clearSearch = ()=>{
    dispatch({ type: 'CLEAR_SEARCH'})
  }

  return (
    //Add the functions that have been defined above into the Context provider, and pass on to the children

    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        increase,
        decrease,
        clearCart,
        searchFilter,
        clearSearch,
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
