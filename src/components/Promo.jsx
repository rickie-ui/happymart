import Offer1 from "../assets/offer.avif";
import Offer2 from "../assets/offer2.avif";
import Offer3 from "../assets/offer3.avif";

const Promo = () => {
  return (
    <div className="relative">
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
  );
};

export default Promo;
