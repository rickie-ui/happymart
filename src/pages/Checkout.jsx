import { IoIosArrowBack, IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import Offer1 from "../assets/offer.avif";
import Offer2 from "../assets/offer2.avif";

const Checkout = () => {
  return (
    <>
      <section className="mx-auto w-11/12 pt-5">
        <div className="flex items-center justify-between text-xl font-medium">
          <IoIosArrowBack />
          <h2 className="opacity-60">My Cart</h2>
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
      </section>

      <section className="mt-14 rounded-t-3xl bg-white p-4">
        <div className="my-2 flex justify-between">
          <p>Subtotal</p>
          <p>$4,450.00</p>
        </div>

        <div className="my-2 flex justify-between">
          <p>Delivery & handling</p>
          <p>$50.00</p>
        </div>

        <div className="my-4 border-2 border-dotted"></div>

        <div className="my-2 flex justify-between">
          <p>Subtotal</p>
          <p>$4,500.00</p>
        </div>

        <Link
          to=""
          className="mb-14 mt-5 block rounded-lg bg-[#FFBD5A] px-4 py-2  text-center font-semibold outline-none"
        >
          Checkout
        </Link>
      </section>
    </>
  );
};

export default Checkout;
