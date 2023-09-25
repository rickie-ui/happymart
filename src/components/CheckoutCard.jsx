import { IoIosAdd, IoIosRemove } from "react-icons/io";
import useCart from "../context/CartContext";

const CheckoutCard = ({ name, price, imageUrl, quantity, id }) => {
  const { addToCart, removeFromCart } = useCart();

  return (
    <div className="flex gap-6 rounded-lg bg-white p-2">
      <img
        src={imageUrl}
        alt="image"
        className="h-20 w-20 rounded-lg object-contain object-center"
      />
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p>In stock</p>
        <div className="flex flex-nowrap  items-center justify-between">
          <p className="font-semibold">{`$${price.toFixed(2)}`}</p>
          <div className="my-2 flex gap-1">
            <button
              className="whitespace-nowrap rounded-md bg-[#FFBD5A] px-2 py-1 text-sm font-semibold"
              onClick={() => removeFromCart({ id })}
            >
              <IoIosRemove />
            </button>
            <p className="flex h-7 w-10 flex-nowrap items-center justify-center">
              {quantity}
            </p>
            <button
              className="whitespace-nowrap rounded-md bg-[#FFBD5A] px-2 py-1 text-sm font-semibold"
              onClick={() => addToCart({ id })}
            >
              <IoIosAdd />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
