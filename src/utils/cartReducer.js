export const initialState = {
  total: 0,
  products: [],
  favorites: [],
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
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: payload.favorite,
      };
    case "REMOVE_FROM_FAVORITE":
      return {
        ...state,
        favorites: payload.favorite,
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
