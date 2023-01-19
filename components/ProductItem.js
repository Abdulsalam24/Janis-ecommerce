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
    <main className="product_wrap flex flex-col w-[48%] shadow-md sm:w-[38%] lg:w-[32%] overflow-hidden bg-white">
      <div className="thumbnail"></div>
      <div className="thumbinfo">
        <div className="py-3 md:py-10 w-[90%] mx-auto text-center md:text-left">
          <div className=" flex flex-col md:flex-row items-center md:items-start justify-center md:gap-3">
            <div className="md:w-[50%]">
              <p
                className="text-base sm:text-xl text-[#757575] font-[15px] text-center md:text-left sm:h-[60px]md:h-[20px]"
                style={{ lineHeight: "1" }}
              >
                {product.title}
              </p>
              <p className="text-xs text-[#757575]">{product.description}</p>
            </div>
            <div className="md:w-[50%] flex flex-col text-center items-center md:flex-row flex-wrap">
              <p className="font-bold text-base md:text-xl text-[#ad0000] md:mr-4">
                ₦{product.price}
              </p>
              <p className="font-bold text-xs">
                <del>₦{product.formerPrice}</del>
              </p>
            </div>
          </div>
          <div className="md:w-[50%]">
            <Link href={`product/${product.id}`}>
              <button
                className={`text-white text-md btn p-1 `}
                style={{
                  padding: "5px",
                  margin: "10px 0 0",
                  borderRadius: "0",
                  background: "rgba(16, 60, 192, 0.9)",
                }}
              >
                More Info
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Link href={`product/${product.id}`} className="text-xs  sm:text-lg">
        <div className="mb-[15px] sm:mb-[35px] flex justify-center h-[140px] py-2 sm:h-[250px]  lg:h-[310px] md:py-2 border border-t-0 border-x-0 border-b-[#e8e8e8] w-[90%] mx-auto">
          <Image
            src={product.img}
            className={`max-w-[400px] w-[100px] h-[120%] sm:w-[350] sm:h-[900] ${
              product.bottle1
                ? "sm:w-[65%] max-w-[280px]"
                : "sm:w-[100%] w-[100%]"
            }`}
            alt="product"
          />
        </div>
      </Link>
      <div className="py-5 px-3 rounded-md flex flex-col gap-1 text-center md:text-left md:w-[80%] mx-auto md:mt-[20px]">
        <p
          className="text-base sm:text-xl text-[#757575] font-[15px] text-center md:text-left sm:h-[60px]md:h-[20px] mb-0"
          style={{ lineHeight: "1" }}
        >
          {product.title}
        </p>
        <p className="text-xs text-[#757575]">{product.description}</p>
        <div className="flex flex-col text-center items-center md:flex-row">
          <p className="font-bold text-base md:text-xl text-[#ad0000] md:mr-4">
            ₦{product.price}
          </p>
          <p className="font-bold text-xs md:text-base">
            <del>₦{product.formerPrice}</del>
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-1 text-xs md:text-lg items-center md:justify-start">
          <div className="flex justify-center bg-white ">
            <AiFillStar fill="#FED00B" />
            <AiFillStar fill="#FED00B" />
            <AiFillStar fill="#FED00B" />
            <AiFillStar fill="#FED00B" />
            <AiFillStar fill="#FED00B" />
          </div>
          <p className="text-sm">{product.reviews} reviews</p>
        </div>
      </div>
    </main>
  );
};

export default ProductItem;
