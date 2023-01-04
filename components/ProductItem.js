import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import productContext from "../context/productContext";

export const convertString = (str) => {
  let number = str;

  return `${number?.toLocaleString()}.00`;
};

const ProductItem = ({ product }) => {
  const { cart } = useContext(productContext);

  const checkCart = cart?.find((cart) => product.id === cart.id);

  return (
    <main className="flex flex-col w-[48%] shadow-md md:w-[32%] overflow-hidden bg-white">
      <Link href={`product/${product.id}`} className="text-xs  sm:text-lg">
        <div className="flex justify-center h-[140px] py-5 py-2 sm:h-[250px]  lg:h-[310px] md:py-2 border border-t-0 border-x-0 border-b-[#e8e8e8] w-[90%] mx-auto">
          <Image
            src={product.img}
            className="w-[100%] h-[100%]"
            alt="product"
            width={400}
            height={300}
          />
        </div>
      </Link>

      <div className="py-5 px-3 rounded-md flex flex-col gap-1">
        <p className="text-sm sm:text-xl text-red-600 text-center font-medium h-[40px] sm:h-[60px]md:h-[20px]">
          {product.title}
        </p>

        <div className="flex flex-col text-center items-center gap-3 ">
          <p className="font-bold text-base md:text-2xl">#{product.price}</p>
          <div className="flex flex-wrap justify-center gap-3 items-center">
            <p className="font-bold text-xs md:text-base">
              <del>#{product.formerPrice}</del>
            </p>
            <p className="text-green-600 text-sm font-semibold">
              %{product.discount} off
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-1 text-xs md:text-lg items-center">
          <div className="flex justify-center bg-white ">
            <AiFillStar fill="#26ACAD" />
            <AiFillStar fill="#26ACAD" />
            <AiFillStar fill="#26ACAD" />
            <AiFillStar fill="#26ACAD" />
            <AiFillStar fill="#26ACAD" />
          </div>
          <p className="text-sm">{product.reviews} reviews</p>
        </div>

        {/* <p className="text-white">{product.star}</p><AiFillStar /> */}

        {/* <div className="mt-7">
          <Link href={`product/${product.id}`} className="text-xs  sm:text-lg">
            <button className={` text-white w-full p-2 rounded-md font-bold  md:flex-1 ${checkCart?.inCart ? "bg-gray-500 hover:bg-gray-600" : "bg-blue "}`}>
              <AiOutlineShoppingCart className="inline mb-1 mr-1" />
              <span>{checkCart?.inCart ? "in cart" : "Add To Cart"}</span>
            </button>
          </Link>
        </div> */}
      </div>
    </main>
  );
};

export default ProductItem;
