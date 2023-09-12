import { GoHome, GoSearch, GoHeart, GoPerson } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="fixed bottom-0 z-50  flex h-14 w-full  items-center justify-evenly gap-2  rounded-t-3xl bg-white text-2xl  shadow-lg">
      <NavLink to="home" className="focus:text-[#FFBD5A]">
        <GoHome />
      </NavLink>
      <NavLink to="search" className="focus:text-[#FFBD5A]">
        <GoSearch />
      </NavLink>
      <NavLink to="favorite" className="focus:text-[#FFBD5A]">
        <GoHeart />
      </NavLink>
      <NavLink to="checkout" className="focus:text-[#FFBD5A]">
        <AiOutlineShoppingCart />
      </NavLink>
      <NavLink to="profile" className="focus:text-[#FFBD5A]">
        <GoPerson />
      </NavLink>
    </nav>
  );
};

export default Navigation;
