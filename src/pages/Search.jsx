import { IoIosArrowBack } from "react-icons/io";
import { GoSearch } from "react-icons/go";

const Search = () => {
  return (
    <section className="mx-auto w-11/12 pt-5">
      <div className="flex items-center justify-between text-2xl font-medium">
        <IoIosArrowBack />
        <h2 className="">Search Item</h2>
        <p></p>
      </div>

      <div className="relative my-6 flex w-auto">
        <p>
          <GoSearch className="absolute left-2 top-2 text-xl" />
        </p>
        <input
          type="text"
          placeholder="Search anything"
          className="w-4/5 rounded-l-xl px-8 py-2 opacity-60 outline-0"
        />
        <button className="rounded-r-xl bg-white/60 px-2 focus:outline-none active:bg-transparent">
          Search
        </button>
      </div>

      {/* show when there are no items */}
      <h2 className="mt-44 text-center font-medium opacity-40">
        You have no recent searches
      </h2>
    </section>
  );
};

export default Search;
