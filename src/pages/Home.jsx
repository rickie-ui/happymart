import { IoMdSwitch } from "react-icons/io";
import Offer1 from "../assets/offer.avif";
import Offer2 from "../assets/offer2.avif";
import Offer3 from "../assets/offer3.avif";
import { GoStarFill } from "react-icons/go";
import { Link } from "react-router-dom";

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
        <button className="rounded-lg bg-white/80  p-3 text-lg focus:bg-[#FFBD5A]">
          <IoMdSwitch />
        </button>
      </div>

      <div className="custom-scrollbar flex gap-2 overflow-x-auto font-semibold">
        <Link
          to="#"
          className="rounded-3xl bg-white px-3 py-1 outline-0  focus:bg-[#FFBD5A]"
        >
          Men
        </Link>{" "}
        <Link
          to="#"
          className="rounded-3xl bg-white px-3 py-1 outline-0 focus:bg-[#FFBD5A]"
        >
          Women
        </Link>{" "}
        <Link
          to="#"
          className="rounded-3xl bg-white px-3 py-1 outline-0 focus:bg-[#FFBD5A]"
        >
          Kids
        </Link>{" "}
        <Link
          to="#"
          className="rounded-3xl bg-white px-3 py-1 outline-0 focus:bg-[#FFBD5A]"
        >
          Accessories
        </Link>
      </div>

      <div className="relative hidden">
        <div className="custom-scrollbar mx-auto flex w-11/12 snap-x items-center gap-2 overflow-x-auto scroll-smooth rounded-2xl shadow-xl	">
          <div
            className="h-28 w-72 flex-shrink-0 snap-center  rounded-2xl "
            id="item1"
          >
            <img
              src={Offer1}
              alt="promo"
              className="h-28 w-full rounded-2xl object-cover object-center"
            />
          </div>
          <div
            className="h-28 w-72 flex-shrink-0 snap-center  rounded-2xl "
            id="item2"
          >
            <img
              src={Offer2}
              alt="promo"
              className="h-28 w-full rounded-2xl object-cover object-center"
            />
          </div>{" "}
          <div
            className="h-28 w-72 flex-shrink-0 snap-center  rounded-2xl "
            id="item3"
          >
            <img
              src={Offer3}
              alt="promo"
              className="h-28 w-full rounded-2xl object-cover object-center"
            />
          </div>
        </div>

        <div className="absolute -bottom-5 left-0 right-0 mt-2 flex justify-center">
          <div className="flex space-x-2">
            <a
              href="#item1"
              className="h-3 w-3 rounded-full bg-white/80 hover:bg-[#FFBD5A] focus:bg-[#FFBD5A] active:bg-[#FFBD5A]"
            ></a>
            <a
              href="#item2"
              className="h-3 w-3 rounded-full bg-white/80 hover:bg-[#FFBD5A] focus:bg-[#FFBD5A] active:bg-[#FFBD5A]"
            ></a>
            <a
              href="#item3"
              className="h-3 w-3 rounded-full bg-white/80 hover:bg-[#FFBD5A] focus:bg-[#FFBD5A] active:bg-[#FFBD5A]"
            ></a>
          </div>
        </div>
      </div>

      <div className="mb-4 mt-8 flex justify-between font-medium">
        <h2 className="text-lg">New Trend</h2>
        <Link to="#" className="text-[#FFBD5A]">
          View all
        </Link>
      </div>

      <main className="grid grid-cols-2 gap-2 pb-16">
        <div className="h-auto rounded-2xl bg-white p-2">
          <img
            src={Offer1}
            alt="product"
            className="mx-auto h-44 w-10/12 object-cover object-center"
          />
          <p className="my-2 font-medium">Retro men shirt</p>
          <div className="my-2 flex items-center text-xs font-semibold text-[#FFBD5A]">
            <GoStarFill /> <p>4.7</p>
          </div>

          <div className="my-2 flex justify-between gap-1">
            <p>$24.00</p>
            <button className="whitespace-nowrap rounded-3xl bg-[#FFBD5A] px-2 py-1 text-sm font-semibold">
              Add Cart
            </button>
          </div>
        </div>

        <div className="h-auto rounded-2xl bg-white p-2">
          <img
            src={Offer1}
            alt="product"
            className="mx-auto h-44 w-10/12 object-cover object-center"
          />
          <p className="my-2 font-medium">Retro men shirt</p>
          <div className="my-2 flex items-center text-xs font-semibold text-[#FFBD5A]">
            <GoStarFill /> <p>4.7</p>
          </div>

          <div className="my-2 flex justify-between gap-1">
            <p>$24.00</p>
            <button className="whitespace-nowrap rounded-3xl bg-[#FFBD5A] px-2 py-1 text-sm font-semibold">
              Add Cart
            </button>
          </div>
        </div>
        <div className="h-auto rounded-2xl bg-white p-2">
          <img
            src={Offer1}
            alt="product"
            className="mx-auto h-44 w-10/12 object-cover object-center"
          />
          <p className="my-2 font-medium">Retro men shirt</p>
          <div className="my-2 flex items-center text-xs font-semibold text-[#FFBD5A]">
            <GoStarFill /> <p>4.7</p>
          </div>

          <div className="my-2 flex justify-between gap-1">
            <p>$24.00</p>
            <button className="whitespace-nowrap rounded-3xl bg-[#FFBD5A] px-2 py-1 text-sm font-semibold">
              Add Cart
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Home;
