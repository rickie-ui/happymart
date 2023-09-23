import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="mx-auto flex w-10/12 flex-col items-center justify-center pt-44 text-lg">
      <p>😌</p>
      <h2 className="my-4 text-2xl">Ooops, page not found</h2>
      <p className="text-center text-sm font-light tracking-wider">
        It looks like you are trying to access a page that has been deleted or
        never even existed.
      </p>

      <Link
        to="/"
        className="my-6 rounded-md bg-[#FFBD5A] px-4 py-2  text-sm uppercase shadow-md"
      >
        Back to homepage
      </Link>
    </div>
  );
};

export default NotFound;
