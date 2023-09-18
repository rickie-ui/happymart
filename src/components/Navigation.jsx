import { GoHome, GoSearch, GoHeart, GoPerson } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart from "../context/CartContext";
import Navbar from "./Navbar/Navbar";
const Navigation = () => {
  const { products } = useCart();
  return (
    <nav className="fixed bottom-0 z-50  flex h-14 w-full  items-center justify-evenly gap-2  rounded-t-3xl bg-white text-2xl  shadow-lg">
      <Navbar to="/home">
        <GoHome />
      </Navbar>
      <Navbar to="/search">
        <GoSearch />
      </Navbar>
      <Navbar to="/favorite">
        <GoHeart />
      </Navbar>
      <Navbar to="/checkout" className="relative">
        <div className="relative">
          <AiOutlineShoppingCart />
          <span className="absolute right-0 top-0 -mr-1 -mt-2 flex  h-5 w-5 items-center justify-center rounded-full bg-[#FFBD5A] text-xs font-medium text-black">
            {products.length}
          </span>
        </div>
      </Navbar>
      <Navbar to="/profile">
        <GoPerson />
      </Navbar>
    </nav>
  );
};

export default Navigation;
