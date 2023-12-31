import { Link } from "react-router-dom";
import useCart from "../context/CartContext";
import CheckoutCard from "../components/CheckoutCard";
import { useState, useLayoutEffect } from "react";
import BackButton from "../components/Button/BackButton";

const Checkout = () => {
  const { products, total } = useCart();
  const [isEmpty, setIsEmpty] = useState(false);

  useLayoutEffect(() => {
    if (products.length === 0) {
      setIsEmpty(true);
    }
  }, [products, isEmpty]);

  const delivery = (total * 5) / 100;

  return (
    <>
      <section className="mx-auto w-11/12 pt-5">
        <div className="flex items-center justify-between text-xl font-medium">
          <BackButton />
          <h2 className="opacity-60">My Cart</h2>
          <p></p>
        </div>

        <main className=" mt-4 flex flex-col gap-4">
          {products.length > 0 ? (
            products.map((products, id) => (
              <CheckoutCard {...products} key={id} />
            ))
          ) : (
            <div className="text-center">The cart is empty</div>
          )}
        </main>
      </section>

      <section className="mt-14 rounded-t-3xl bg-white p-4">
        <div className="my-2 flex justify-between">
          <p>Subtotal</p>
          <p>{`$${total.toFixed(2)}`}</p>
        </div>

        <div className="my-2 flex justify-between">
          <p>Delivery & handling</p>
          <p>{`$${delivery.toFixed(2)}`}</p>
        </div>

        <div className="my-4 border-2 border-dotted"></div>

        <div className="my-2 flex justify-between">
          <p>Subtotal</p>
          <p>{`$${total.toFixed(2)}`}</p>
        </div>

        <Link
          to=""
          className={`mb-14 mt-5 block cursor-pointer rounded-lg bg-[#FFBD5A] px-4  py-2 text-center font-semibold outline-none ${
            isEmpty ? "cursor-not-allowed bg-[#adb9c7] opacity-40" : ""
          }`}
        >
          Checkout
        </Link>
      </section>
    </>
  );
};

export default Checkout;
