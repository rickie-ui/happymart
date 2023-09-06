import landing from "../assets/black-friday.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="mx-auto w-11/12 pt-20 antialiased">
      <img src={landing} alt="" className="mx-auto w-8/12 opacity-60" />
      <h2 className="my-2 text-center font-mono text-3xl  font-bold tracking-wider opacity-60">
        HappyMart
      </h2>
      <p className="text-center text-sm font-semibold tracking-widest opacity-60">
        The online shopping app
      </p>

      <section className="mt-14">
        <Link
          to=""
          className="mx-auto block w-10/12 rounded-lg bg-[#FFBD5A] px-4 py-2  text-center font-semibold outline-none"
        >
          Get Started
        </Link>

        <p className="mt-10 text-center">
          Already have an account?{" "}
          <Link to="" className="text-[#FFBD5A] underline">
            Log In
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Landing;
