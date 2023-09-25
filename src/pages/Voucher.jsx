import { Link } from "react-router-dom";
import Accordion from "../components/Accordion/Accordion";
import BackButton from "../components/Button/BackButton";

const Voucher = () => {
  return (
    <section className="mx-auto w-11/12 pb-10 pt-5">
      <div className="flex items-center justify-between text-xl font-medium">
        <BackButton />
        <h2 className="opacity-60">Gift Cards & Vouchers</h2>
        <p></p>
      </div>

      <div className="mt-10 rounded-3xl bg-white px-4 py-8">
        <h2 className="my-2 text-center font-medium ">
          You have no cards or vouchers yet
        </h2>

        <p className="text-center text-xs font-medium opacity-40">
          You currently have no card linked to the account.
        </p>

        <Link
          to=""
          className="mb-4 mt-8 block  rounded-md bg-[#FFBD5A] px-4 py-3 text-center font-semibold text-gray-700"
        >
          Add Gift Cards
        </Link>

        <Link
          to=""
          className="mb-4 block  rounded-md bg-[#E7ECF2] px-4 py-3 text-center font-semibold text-gray-700"
        >
          Add Gift Voucher
        </Link>
      </div>

      <div className="mx-auto mb-10 mt-4 max-w-md rounded-3xl bg-white p-4">
        <p className="my-2 px-4 text-xs font-medium opacity-40">
          Need help with these options?
        </p>
        <Accordion
          title="What is a gift card?"
          content="A gift card is a prepaid card or voucher that is typically issued by a retailer or a financial institution and can be used as an alternative form of payment for goods or services."
        />
        <Accordion
          title="What is a gift voucher?"
          content="A gift voucher is a pre-purchased and often prepaid document or card that can be redeemed for goods or services at a specific retailer, business, or establishment."
        />
        <Accordion
          title="How to use gift card/voucher?"
          content="If you're shopping online, there is usually an option to enter the gift card number and PIN during the checkout process. Some retailers also accept gift cards for online purchases."
        />
      </div>
    </section>
  );
};

export default Voucher;
