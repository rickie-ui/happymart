import useCart from "../context/CartContext";
import { IoIosTrash } from "react-icons/io";

const FavoriteCard = ({ name, price, imageUrl, id }) => {
  const { removeFromFavorite, addToCart } = useCart();

  return (
    <div className="flex gap-6 rounded-lg bg-white p-2">
      <img
        src={imageUrl}
        alt="image"
        className="h-20 w-20 rounded-lg object-contain object-center"
      />
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="my-2 text-sm font-medium">{`$${price.toFixed(2)}`}</p>
        <div className="flex items-center justify-between gap-2">
          <button
            className="whitespace-nowrap bg-[#FFBD5A] px-2 py-1 text-sm font-semibold"
            onClick={() => addToCart({ name, price, imageUrl, id })}
          >
            Add To Cart
          </button>
          <button
            className="px-2 py-1 text-2xl font-semibold text-red-400"
            onClick={() => removeFromFavorite({ id })}
          >
            <IoIosTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
