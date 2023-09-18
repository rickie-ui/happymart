import { IoMdSwitch } from "react-icons/io";
import { Link } from "react-router-dom";
import Promo from "../components/Promo";
import Product from "../components/Product";
import { shopData } from "../constants/shopData";

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
        {/* {uniqueBrandNames.map((brandName, id) => (
          <Link
            to="#"
            key={id}
            className="whitespace-nowrap rounded-3xl bg-white px-3 py-1 lowercase outline-0 focus:bg-[#FFBD5A]"
          >
            {brandName}
          </Link>
        ))} */}
      </div>
      <Promo />

      <div className="mb-4 mt-8 flex justify-between font-medium">
        <h2 className="text-lg">New Trend</h2>
        <Link to="#" className="text-[#FFBD5A]">
          View all
        </Link>
      </div>

      <main className="grid grid-cols-2 gap-2 pb-16">
        {shopData.length > 0 ? (
          shopData.map((products, id) => <Product {...products} key={id} />)
        ) : (
          <div className="mt-20  text-center text-green-500">Loading...</div>
        )}
      </main>
    </section>
  );
};

export default Home;
