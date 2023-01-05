import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import { convertString } from "./ProductItem";
import Link from "next/link";
import productContext from "../context/productContext";
import logo from "../assets/img/Janis.png";

const Nav = () => {
  const [viewCart, setViewCart] = useState(false);

  const { cart, setCart } = useContext(productContext);

  const total = cart?.map((x) => x.price * x.qtn);

  const handleDelete = (id) => {
    const filterCart = cart.filter((x) => x.id !== id);
    setCart(filterCart);
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0">
      <div className="relative w-[90%] mx-auto flex justify-between max-w-[1300px] z-1">
        <div className="w-full py-6 flex justify-between items-center">
          <div>
            <Link href="/">
              <Image src={logo} alt="product" width={400} className="w-[120%]" />
            </Link>
           
          </div>

          <div className="flex flex-1 items-center justify-end gap-3 md:w-[10%]">
            <div
              className="relative cursor-pointer flex items-center"
              onClick={() => setViewCart(!viewCart)}
            >
              <AiOutlineShoppingCart className="text-2xl font-extrabold" />
              <i className="absolute text-sm text-white bottom-3 left-2 b bg-blue  leading-4 w-6 h-4 text-center rounded-full">
                {cart?.length}
              </i>
            </div>
          </div>
        </div>

        {
          <div
            className={`absolute transition-all duration-300 bg-white top-[85px] ${
              !viewCart ? "left-[150%] " : "left-[0px] md:left-[62%]"
            } right-0 rounded-lg w-[95%] max-w-lg m-auto shadow-xl p-1 z-30 md:w-[35%] md:right-0 md:m-0`}
          >
            <div>
              <h4 className="text-black p-5 border-gray-200 border-b font-bold text-md">
                Cart
              </h4>
            </div>
            {cart?.length > 0 || cart === undefined ? (
              <>
                {cart?.map((cart, i) => (
                  <div className="p-4" key={cart.id}>
                    <div className="flex items-center justify-between gap-3 text-gray-400 w-full">
                      <Image
                        className="rounded w-[70px]"
                        src={cart.img.src}
                        alt="pro-imgage"
                        width={100}
                        height={100}
                      />

                      <div className="flex-1 text-sm">
                        <p>{cart.title}</p>

                        <p>
                          {`${convertString(cart.price)} * ${cart.qtn}`} {"="}{" "}
                          <b className="text-black">
                            {`#${convertString(cart.price * cart.qtn)}`}
                          </b>
                        </p>
                      </div>

                      <i
                        className="text-xl cursor-pointer"
                        onClick={() => handleDelete(cart.id)}
                      >
                        <RiDeleteBin5Line />
                      </i>
                    </div>
                  </div>
                ))}
                <h3 className="mr-3 text-right text-gray-400">
                  Total :{" "}
                  <b className="text-black ">
                    #
                    {total.length > 0
                      ? convertString(total.reduce((a, b) => a + b))
                      : 0}
                  </b>
                </h3>
              </>
            ) : (
              <div className="flex justify-center items-center py-20 text-gray-400 font-bold">
                <h3>Your cart is empty</h3>
              </div>
            )}

            <div className="text-center">
              {cart?.length > 0 || cart === undefined ? (
                <Link href="/checkout">
                  <button className="bg-blue text-white my-4 w-11/12 p-3 rounded-lg  font-bold text-sm md:text-md">
                    <i className="not-italic">Checkout</i>
                  </button>
                </Link>
              ) : (
                <button className="bg-blue text-white my-4 w-11/12 p-3 rounded-lg  font-bold text-sm md:text-md">
                  <i className="not-italic">Checkout</i>
                </button>
              )}
            </div>
          </div>
        }
      </div>
    </nav>
  );
};

export default Nav;
