import { GoStarFill } from "react-icons/go";
import { BsFillBookmarkFill } from "react-icons/bs";
import useCart from "../context/CartContext";
import { useEffect, useState } from "react";

const Product = ({ name, price, rating, imageUrl, id }) => {
  const { products, addToCart, removeFromCart } = useCart();

  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productIsInCart = products.find((product) => product.id === id);

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, name]);

  const handleClick = () => {
    const product = { name, price, rating, imageUrl, id };

    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };
  return (
    <div className="relative h-auto rounded-2xl bg-white p-2" key={id}>
      <div className="absolute right-5 top-3 cursor-pointer text-gray-500">
        <BsFillBookmarkFill />
      </div>
      <img
        src={imageUrl}
        alt="product"
        className="mx-auto h-32 w-10/12 object-cover object-top"
      />
      <p className="my-2 font-medium">{name}</p>
      <div className="my-2 flex items-center text-xs font-semibold text-[#FFBD5A]">
        <GoStarFill /> <p>{rating || "1.0"}</p>
      </div>

      <div className="my-2 flex justify-between gap-1">
        <p>{`$${price.toFixed(2)}`}</p>
        <button
          className="whitespace-nowrap rounded-3xl bg-[#FFBD5A] px-2 py-1 text-sm font-semibold"
          onClick={handleClick}
          {...isInCart}
        >
          <p>{isInCart ? "Remove" : "Add Cart"}</p>
        </button>
      </div>
    </div>
  );
};

export default Product;
