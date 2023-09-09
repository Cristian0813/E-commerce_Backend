const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'UPDATE_CART_ITEM_QUANTITY':
      const { productId, quantity } = action.payload;
      const updatedItems = state.cartItems.map((item) =>
        item.id === productId ? { ...item, qty: quantity } : item
      );
      return {
        ...state,
        cartItems: updatedItems,
      };
    case 'REMOVE_FROM_CART':
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    default:
      return state;
  }
};

export const updateCartItem = (productId, quantity) => {
  return {
    type: 'UPDATE_CART_ITEM_QUANTITY',
    payload: { productId, quantity },
  };
};

export const removeFromCart = (productId) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: productId,
  };
};
