import { Link } from "react-router-dom";
import BackButton from "../components/Button/BackButton";
import FavoriteCard from "../components/FavoriteCard";
import useCart from "../context/CartContext";

const Favorite = () => {
  const { favorites } = useCart();
  return (
    <section className="mx-auto w-11/12 pt-5">
      <div className="flex items-center justify-between text-xl font-medium">
        <BackButton />
        <h2 className="opacity-60">All Saved Items</h2>
        <p></p>
      </div>

      <main className=" mt-8 flex flex-col gap-4">
        {favorites.length > 0 ? (
          favorites.map((favorites, id) => (
            <FavoriteCard {...favorites} key={id} />
          ))
        ) : (
          <div className="mt-32 text-center">No favorite items</div>
        )}
      </main>

      <Link
        to="/home"
        className="mx-auto mt-24 block w-32 border-2  border-[#FFBD5A]  px-4 py-2 text-center  font-semibold outline-none hover:bg-[#FFBD5A] focus:bg-[#FFBD5A]"
      >
        Add Item
      </Link>
    </section>
  );
};

export default Favorite;
