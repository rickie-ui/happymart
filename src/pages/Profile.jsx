import {
  IoIosArrowForward,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { MdPayment } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { LiaUserSolid } from "react-icons/lia";
import {
  AiOutlineShoppingCart,
  AiOutlineGift,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import BackButton from "../components/Button/BackButton";

import { BiSolidEditAlt } from "react-icons/bi";
import Avatar from "../assets/profile.jpg";
import { Link, NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <section className="mx-auto w-11/12 pt-5">
        <div className="flex items-center justify-between text-xl font-medium">
          <BackButton />
          <h2 className="opacity-60">Profile</h2>
          <p></p>
        </div>
      </section>
      <section className="mt-10 rounded-t-3xl bg-white p-4">
        <div className="mb-12 flex items-center justify-between">
          <img
            src={Avatar}
            alt="avatar"
            className="h-14 w-14 rounded-full object-cover object-center"
          />
          <div>
            <h3 className="text-2xl font-semibold">Erick Beale</h3>
            <p className="text-xs font-medium opacity-40">+254712345678</p>
          </div>
          <Link to="" className=" inline-block rounded-lg border p-2">
            <BiSolidEditAlt />
          </Link>
        </div>
        <NavLink
          to="/orders"
          className="mb-4 flex items-center justify-between font-semibold"
        >
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-[#E7ECF2] p-2">
              <AiOutlineShoppingCart />
            </div>
            <p>My Orders</p>
          </div>
          <div>
            <IoIosArrowForward />
          </div>
        </NavLink>
        <NavLink
          to=""
          className="mb-4 flex items-center justify-between font-semibold"
        >
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-[#E7ECF2] p-2">
              <IoMdNotificationsOutline />
            </div>
            <p>Notification</p>
          </div>

          <div>
            <IoIosArrowForward />
          </div>
        </NavLink>
        <NavLink
          to="/vouchers"
          className="mb-4 flex items-center justify-between font-semibold"
        >
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-[#E7ECF2] p-2">
              <AiOutlineGift />
            </div>
            <p>Gift & Voucher</p>
          </div>

          <div>
            <IoIosArrowForward />
          </div>
        </NavLink>
        <NavLink
          to=""
          className="mb-4 flex items-center justify-between font-semibold"
        >
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-[#E7ECF2] p-2">
              <FaRegAddressCard />
            </div>
            <p>Address Book</p>
          </div>

          <div>
            <IoIosArrowForward />
          </div>
        </NavLink>
        <NavLink
          to="/payments"
          className="mb-4 flex items-center justify-between font-semibold"
        >
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-[#E7ECF2] p-2">
              <MdPayment />
            </div>
            <p>Payments Methods</p>
          </div>

          <div>
            <IoIosArrowForward />
          </div>
        </NavLink>
        <NavLink
          to=""
          className="mb-4 flex items-center justify-between font-semibold"
        >
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-[#E7ECF2] p-2">
              <AiOutlineUsergroupAdd />
            </div>
            <p>Contact Preferences</p>
          </div>

          <div>
            <IoIosArrowForward />
          </div>
        </NavLink>
        <NavLink
          to=""
          className="mb-4 flex items-center justify-between font-semibold"
        >
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-[#E7ECF2] p-2">
              <LiaUserSolid />
            </div>
            <p>Social Account</p>
          </div>

          <div>
            <IoIosArrowForward />
          </div>
        </NavLink>
      </section>
    </>
  );
};

export default Profile;
