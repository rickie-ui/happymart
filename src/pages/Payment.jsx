import { IoIosArrowBack } from "react-icons/io";
import Card from "../assets/card1.jpg";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <section className="mx-auto w-11/12  pt-5">
      <div className="flex items-center justify-between text-xl font-medium">
        <IoIosArrowBack />
        <h2 className="opacity-60">Add payment</h2>
        <p></p>
      </div>

      <div className="mt-20 rounded-3xl bg-white px-4 pb-10">
        <img src={Card} alt="" className="mx-auto my-10 w-8/12 opacity-60" />

        <h2 className="my-2 text-center font-medium">
          You have no cards added.
        </h2>

        <Link
          to=""
          className="mb-4 mt-8 block  rounded-md bg-[#FFBD5A]  px-4 py-3 text-center font-semibold text-gray-700"
        >
          Add New Card
        </Link>
      </div>
    </section>
  );
};

export default Payment;
