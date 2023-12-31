import { createContext, useContext, useReducer } from "react";
import cartReducer, { initialState } from "../utils/cartReducer";

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  function addToCart(product) {
    const updatedCart = [...state.products];
    const productIndex = updatedCart.findIndex((p) => p.id === product.id);

    if (productIndex !== -1) {
      // If the product is already in the cart, increment its quantity
      updatedCart[productIndex].quantity += 1;
    } else {
      // If it's a new product, add it to the cart with a quantity of 1
      product.quantity = 1;
      updatedCart.push(product);
    }

    updateCart(updatedCart);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        product: updatedCart,
      },
    });
  }

  const removeFromCart = (product) => {
    const updatedCart = [...state.products];
    const productIndex = updatedCart.findIndex((p) => p.id === product.id);

    if (productIndex !== -1) {
      // If the product is already in the cart and its quantity is greater than 1, decrement its quantity
      if (updatedCart[productIndex].quantity > 1) {
        updatedCart[productIndex].quantity -= 1;
      } else {
        // If its quantity is 1 or less, remove it from the cart
        updatedCart.splice(productIndex, 1);
      }
    }

    updateCart(updatedCart);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        product: updatedCart,
      },
    });
  };

  const addToFavorite = (favorite) => {
    const productIndex = state.favorites.findIndex((p) => p.id === favorite.id);

    if (productIndex === -1) {
      let updatedCart = [...state.favorites, favorite];
      dispatch({
        type: "ADD_TO_FAVORITE",
        payload: {
          favorite: updatedCart,
        },
      });
    }
  };

  const removeFromFavorite = (favorite) => {
    const productIndex = state.favorites.findIndex((p) => p.id === favorite.id);
    if (productIndex !== -1) {
      const updatedCart = [
        ...state.favorites.slice(0, productIndex),
        ...state.favorites.slice(productIndex + 1),
      ];

      console.log(updatedCart);
      dispatch({
        type: "REMOVE_FROM_FAVORITE",
        payload: {
          favorite: updatedCart,
        },
      });
    }
  };

  const updateCart = (product) => {
    const total = product.reduce(
      (total, currentValue) =>
        total + currentValue.price * currentValue.quantity,
      0,
    );

    dispatch({
      type: "UPDATE_CART",
      payload: {
        total,
      },
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    favorites: state.favorites,
    addToCart,
    removeFromCart,
    addToFavorite,
    removeFromFavorite,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart context must be used within the CartContext");
  }

  return context;
};

export default useCart;
