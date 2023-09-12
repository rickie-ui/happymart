import { IoIosArrowBack, IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import Offer1 from "../assets/offer.avif";
import Offer2 from "../assets/offer2.avif";

const Favorite = () => {
  return (
    <section className="mx-auto w-11/12 pt-5">
      <div className="flex items-center justify-between text-xl font-medium">
        <IoIosArrowBack />
        <h2 className="opacity-60">All Saved Items</h2>
        <p></p>
      </div>

      <main className=" mt-4 flex flex-col gap-4">
        <div className="flex gap-6 rounded-lg bg-white p-2">
          <img
            src={Offer1}
            alt=""
            className="h-20 w-20 rounded-lg object-cover object-center"
          />
          <div>
            <h3 className="font-semibold">Nike Shoe</h3>
            <p>In stock</p>

            <div className="flex items-center justify-between gap-8">
              <p className="font-semibold">$22.00</p>
              <div className="my-2 flex  gap-1">
                <button className="whitespace-nowrap rounded-md bg-[#FFBD5A] px-2 py-1 text-sm font-semibold">
                  <IoIosAdd />
                </button>
                <p className="mx-2">2</p>
                <button className="whitespace-nowrap rounded-md bg-[#FFBD5A] px-2 py-1 text-sm font-semibold">
                  <IoIosAdd />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6 rounded-lg bg-white p-2">
          <img
            src={Offer2}
            alt=""
            className="h-20 w-20 rounded-lg object-cover object-center"
          />
          <div>
            <h3 className="font-semibold">Ladies Bag</h3>
            <p>Out Stock</p>

            <div className="flex items-center justify-between gap-8">
              <p className="font-semibold">$25.00</p>
              <div className="my-2 flex  gap-1">
                <button className="whitespace-nowrap rounded-md bg-[#FFBD5A] px-2 py-1 text-sm font-semibold">
                  <IoIosAdd />
                </button>
                <p className="mx-2">0</p>
                <button className="whitespace-nowrap rounded-md bg-[#FFBD5A] px-2 py-1 text-sm font-semibold">
                  <IoIosAdd />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6 rounded-lg bg-white p-2">
          <img
            src={Offer1}
            alt=""
            className="h-20 w-20 rounded-lg object-cover object-center"
          />
          <div>
            <h3 className="font-semibold">Apple T-Shirt</h3>
            <p>In stock</p>

            <div className="flex items-center justify-between gap-8">
              <p className="font-semibold">$18.00</p>
              <div className="my-2 flex  gap-1">
                <button className="whitespace-nowrap rounded-md bg-[#FFBD5A] px-2 py-1 text-sm font-semibold">
                  <IoIosAdd />
                </button>
                <p className="mx-2">4</p>
                <button className="whitespace-nowrap rounded-md bg-[#FFBD5A] px-2 py-1 text-sm font-semibold">
                  <IoIosAdd />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Link
        to=""
        className="mt-5 block rounded-lg bg-[#FFBD5A] px-4 py-2  text-center font-semibold outline-none"
      >
        Add Item
      </Link>
    </section>
  );
};

export default Favorite;
