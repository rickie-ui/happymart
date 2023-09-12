import { BsArrowLeft } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="mx-auto w-11/12 pt-4 antialiased">
      <div>
        <BsArrowLeft />
      </div>

      <h3 className="my-4 text-2xl font-semibold">Sign Up</h3>

      <Link
        to=""
        className="flex items-center justify-center gap-2 rounded-3xl border-0 bg-white px-4 py-2 text-xl font-semibold outline-0"
      >
        <FcGoogle />
        Google
      </Link>

      <p className="my-6 font-medium opacity-50">Or sign up with email</p>

      <form>
        <label htmlFor="firstName" className="my-1 block font-semibold">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter first name"
          className="w-full rounded-md px-4 py-2"
        />
        <label htmlFor="lastName" className="my-1 block font-semibold">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter last name"
          className="w-full rounded-md px-4 py-2"
        />
        <label htmlFor="email" className="my-1 block font-semibold">
          Email Address
        </label>
        <input
          type="text"
          name="email"
          placeholder="Enter email address"
          className="w-full rounded-md px-4 py-2"
        />
        <label htmlFor="password" className="my-1 block font-semibold">
          Password
        </label>
        <input
          type="text"
          name="password"
          placeholder="Enter password"
          className="w-full rounded-md px-4 py-2"
        />

        <button
          type="submit"
          className="mb-4 mt-8 w-full rounded-md bg-[#FFBD5A] px-4 py-2 font-semibold"
        >
          Sign Up
        </button>

        <p className="font-semibold opacity-50">
          Already have an account?{" "}
          <Link to="/signin" className="underline">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
