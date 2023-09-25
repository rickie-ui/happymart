import shopCart from "../assets/shop-cart.jpg";
import { Link } from "react-router-dom";
import BackButton from "../components/Button/BackButton";

const Orders = () => {
  return (
    <section className="mx-auto w-11/12  pt-5">
      <div className="flex items-center justify-between text-xl font-medium">
        <BackButton />
        <h2 className="opacity-60">My Orders</h2>
        <p></p>
      </div>

      <div className="mt-20 rounded-3xl bg-white px-4 pb-10">
        <img
          src={shopCart}
          alt=""
          className="mx-auto my-10 w-8/12 opacity-60"
        />

        <h2 className="my-2 text-center font-medium">You have no order</h2>

        <Link
          to="/home"
          className="mb-4 mt-8 block  rounded-md bg-[#FFBD5A] px-4 py-3 text-center font-semibold text-gray-700"
        >
          Start Shopping
        </Link>
      </div>
    </section>
  );
};

export default Orders;
