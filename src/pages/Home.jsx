import { IoMdSwitch } from "react-icons/io";
import { Link } from "react-router-dom";
import Promo from "../components/Promo";
import Product from "../components/Product";
import { shopData } from "../constants/shopData";
import { useState } from "react";
import Debounce from "../utils/Debounce";

const Home = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = Debounce(query, 400);

  const onChange = (event) => setQuery(event.target.value);
  const products = shopData.filter(({ name }) => {
    return name.toLowerCase().includes(debouncedQuery.toLowerCase());
  });
  return (
    <section className="mx-auto w-11/12 pt-5">
      <h2 className="text-center text-3xl font-semibold">Discover</h2>
      <div className="my-6 flex gap-2">
        <input
          type="text"
          placeholder="Search Product"
          value={query}
          onChange={onChange}
          className="w-full rounded-md px-4 font-medium opacity-60 outline-0"
        />
        <button className="rounded-lg bg-white/80  p-3 text-lg focus:bg-[#FFBD5A]">
          <IoMdSwitch />
        </button>
      </div>

      <Promo />

      <div className="mb-4 mt-8 flex justify-between font-medium">
        <h2 className="text-lg">New Trend</h2>
        <Link to="#" className="text-[#FFBD5A]">
          View all
        </Link>
      </div>

      <main className="relative grid grid-cols-2 gap-2 pb-16">
        {products.length > 0 ? (
          products.map((products, id) => <Product {...products} key={id} />)
        ) : (
          <div className="absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 transform ">
            Product not found!
          </div>
        )}
      </main>
    </section>
  );
};

export default Home;
