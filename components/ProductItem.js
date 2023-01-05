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
            className="w-[83%] h-[120%] md:w-[400] md:h-[900]"
            alt="product"
            width={300}
            height={300}
          />
        </div>
      </Link>
      <div className="py-5 px-3 rounded-md flex flex-col gap-1 text-center md:text-left md:w-[80%] mx-auto md:my-[60px]">
        <p
          className="text-base sm:text-xl text-[#757575] font-[15px] text-center md:text-left sm:h-[60px]md:h-[20px]"
          style={{ lineHeight: "1" }}
        >
          {product.title}
        </p>
        <p className="text-xs text-[#757575]">{product.description}</p>
        <div className="flex flex-col text-center items-center md:flex-row">
          <p className="font-bold text-base md:text-2xl text-[#ad0000] md:mr-4">
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
