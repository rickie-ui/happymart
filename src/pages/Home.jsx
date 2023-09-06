import { IoMdSwitch } from "react-icons/io";
import Logo from "../assets/shop.avif";

const Home = () => {
  return (
    <section className="mx-auto w-11/12 pt-5">
      <h2 className="text-center text-3xl font-semibold">Discover</h2>
      <div className="my-6 flex gap-2">
        <input
          type="text"
          placeholder="Search Product"
          className="w-full rounded-md px-4 font-medium opacity-60 outline-0"
        />
        <button className="rounded-lg bg-white/80 p-3 text-lg focus:bg-[#FFBD5A]">
          <IoMdSwitch />
        </button>
      </div>
    </section>
  );
};

export default Home;
