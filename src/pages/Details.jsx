import { Link, useParams } from "react-router-dom";
import BackButton from "../components/Button/BackButton";
import { FaRegHeart } from "react-icons/fa";
import { shopData } from "../constants/shopData";
import { IoIosStar } from "react-icons/io";
import { useEffect, useState } from "react";
import useCart from "../context/CartContext";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { products, addToCart } = useCart();

  const { quantity } = products;

  useEffect(() => {
    // Find the product with the matching ID from the JSON data
    const foundProduct = shopData.find((item) => item.id == id);

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // Handle the case where the product with the given ID is not found
      // For example, you can set an error state or redirect to a 404 page
      return null;
    }
  }, [id]);

  return (
    <section className="mx-auto w-11/12 pt-5">
      <div className="flex items-center justify-between text-2xl font-medium">
        <BackButton />
        <h2 className="opacity-60">Details</h2>
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white">
          <FaRegHeart />
        </div>
      </div>

      {product ? (
        <section className="">
          <div className="relative  mx-auto my-8 h-36 w-10/12">
            <div className="perspective-1000 group h-full w-full ">
              <div className="group-hover:rotate-x-6 h-full w-full origin-center transform transform-gpu transition-transform duration-300 group-hover:scale-105">
                <img
                  src={product.imageUrl}
                  alt=""
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* filter */}
          <div className="flex justify-center gap-4">
            {product.sizes.map((size, index) => (
              <Link
                to=""
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white focus:bg-[#FFBD5A]"
                key={index}
              >
                {size}
              </Link>
            ))}
          </div>

          {/* description */}

          <div className="mt-10 rounded-t-3xl bg-white px-4 pb-12 pt-4">
            <div className="mb-4 flex justify-between space-x-2">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p>
                Rating
                <span className="flex items-center space-x-1 font-bold">
                  <IoIosStar className="text-[#FFBD5A]" /> {product.rating}
                </span>
              </p>
            </div>

            <h2 className="font-bold">Description</h2>
            <p className="my-2 text-sm font-medium opacity-50">
              {product.description}
            </p>

            <div className="mt-6 flex items-center justify-between">
              <h2 className="text-lg">
                Price <br />{" "}
                <span className="font-bold">
                  {`$${product.price.toFixed(2)}`}
                </span>
              </h2>
              <button
                className="cursor-pointer rounded-lg bg-[#FFBD5A] px-4  py-2 text-center font-semibold outline-none"
                onClick={() =>
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    imageUrl: product.imageUrl,
                    quantity: quantity,
                  })
                }
              >
                Add To Cart
              </button>
            </div>
          </div>
        </section>
      ) : (
        <p>Product not found</p>
      )}
    </section>
  );
};

export default Details;
