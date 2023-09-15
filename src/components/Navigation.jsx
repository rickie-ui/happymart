import { GoHome, GoSearch, GoHeart, GoPerson } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Navbar from "./Navbar/Navbar";
const Navigation = () => {
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
      <Navbar to="/checkout">
        <AiOutlineShoppingCart />
      </Navbar>
      <Navbar to="/profile">
        <GoPerson />
      </Navbar>
    </nav>
  );
};

export default Navigation;
