export const initialState = {
  total: 0,
  products: [],
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: payload.product,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        products: payload.product,
      };
    case "UPDATE_CART":
      return {
        ...state,
        total: payload.total,
      };
    default:
      return state;
    // throw new error(No case for type ${type} found in cart reducer)
  }
};

export default cartReducer;
