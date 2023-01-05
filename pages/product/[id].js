import React, { useContext } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";
import {
  AiFillStar,
  AiOutlineArrowLeft,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";
import Link from "next/link";
import Nav from "../../components/Nav";
import { convertString } from "../../components/ProductItem";
import productContext from "../../context/productContext";
import { staticProducts } from "../../data/products";
import Spinner from "../../components/Spinner";
import { useState } from "react";
import Footer from "../../components/Footer";
import { useRef } from "react";

const ProductItem = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { id } = router.query;

  const selectOption = useRef();

  const [singleProduct, setSingleProduct] = useState({});

  const {
    product,
    getProduct,
    setProduct,
    cart,
    addToCart,
    isLoading,
    quantityChange,
  } = useContext(productContext);

  useEffect(() => {
    getProduct(id);
    setProduct((prev) => ({
      ...prev,
      item: "1 month pack",
    }));
  }, [id]);

  const addToQuantity = (type, product) => {
    quantityChange(type, product);
  };

  const checkCart = cart?.find((cart) => product.id === cart.id);

  const selectChange = (e) => {
    console.log(e.value);
    setProduct((prev) => ({
      ...prev,
      item: e.target.value,
    }));
  };

  console.log(product, "product");
  if (product === undefined) {
    return <Spinner />;
  }

  return (
    <div className="bg-[#fff] mt-24 ">
      <Nav />
      <main className="w-full my-10 mx-auto ">
        <div className="flex flex-col md:flex-row items-center md:w-[80%] w-[90%] mx-auto">
          <div className="text-center block md:hidden">
            <p
              className=" my-2 text-4xl md:text-[55px] font-semibold "
              style={{ color: `${product.colorTheme || "#3C3C3C"}` }}
            >
              {product.title}
            </p>
            <p className="my-2 text-md md:text-xl font-medium">
              {product.description}
            </p>
          </div>
          <div className="shadow-sm w-full  md:w-[50%] text-center">
            <Image
              src={product.img}
              alt="product"
              width={100}
              height={100}
              layout="fill"
              className="w-[60%] md:w-[50%] mx-auto"
            />
          </div>
          <div className="h flex flex-col w-full md:w-[50%] py-5 px-3">
            <div className="hidden md:block">
              <p
                className=" my-2 text-4xl md:text-[55px] font-semibold text-[#3C3C3C] leading-[40px] md:leading-[60px]"
                style={{ color: `${product.colorTheme || "#3C3C3C"}` }}
              >
                {product.title}
              </p>
              <p className="my-2 text-md md:text-xl font-medium">
                {product.description}
              </p>
            </div>
            <div
              className="flex flex-col gap-2 p-6 pl-6 rounded-1 my-4 text-center"
              style={{ boxShadow: "1px 1px 10px 1px rgba(119, 119, 119,0.3)" }}
            >
              <p className="">
                <span className="text-4xl text-[#818191] md:text-[45px]">
                  ₦{product.price}
                </span>
              </p>
              <span className="text-gray-400 text-lg">
                <del>₦{product.formerPrice}</del>
              </span>
            </div>
            <div className="">
              <Link href="/checkout">
                <button
                  onClick={() =>
                    addToCart(product.price, "1 month plan", product.img)
                  }
                  className={` text-white w-full p-3 md:p-6 rounded-lg font-bold text-md md:text-lg md:flex-1  ${
                    checkCart?.inCart
                      ? "bg-gray-500 hover:bg-gray-600"
                      : "bg-[#103CC0]"
                  } btn`}
                >
                  <AiOutlineShoppingCart className="inline mb-1 mr-1" />
                  {!checkCart?.inCart ? "Add To Cart" : "change cart"}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="contents_wrap  w-[90%] md:w-[70%] mx-auto text-base md:text-xl">
          <h2 className="text-center my-4 md:my-8 md:mt-16 text-2xl md:text-5xl font-semibold">
            <strong>{product.contents?.head1}</strong>
          </h2>
          <div>
            {product?.contents?.text1 &&
              product.contents?.text1.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
          </div>
          <div
            className={` text-[white] p-4 md:p-8 text-center`}
            style={{
              borderTopLeftRadius: "30px",
              borderTopRightRadius: "30px",
              background: product.colorTheme || "green",
            }}
          >
            <h2
              // style={{ color: product?.colorTitle }}
              className="my-6 text-2xl font-semibold"
            >
              {product.contents?.head2}
            </h2>
          </div>
          <div>
            {product.contents?.text2.map((text, idx) => (
              <p key={idx} className={`${idx == 0 && "font-semibold"}`}>
                {text}
              </p>
            ))}
          </div>
          <h2 className="my-4 text-2xl font-semibold text-center md:my-8">
            {product.contents?.head3}
          </h2>
          <div className=" flex flex-col md:flex-row justify-between md:gap-8">
            {product?.contents?.list1 &&
              product.contents?.list1.map((text, idx) => (
                <p key={idx} className="flex md:flex-1">
                  <span style={{ color: "#FC8608" }}>
                    {product.contents.listType}
                  </span>{" "}
                  {text}
                </p>
              ))}
          </div>
          <div className=" my-14 flex flex-col md:flex-row md:gap-14 md:items-center">
            {product?.contents?.pricingTable &&
              product.contents?.pricingTable.map((item, idx) => (
                <div
                  key={idx}
                  className="text-center bg-[#EFEFEF] md:flex-1 mb-8 md:mb-0"
                  style={{ borderRadius: "20px" }}
                >
                  {item.most && (
                    <h2
                      className={`bg-[#2fa1f4] text-[white] text-center py-4`}
                      style={{
                        borderTopLeftRadius: "30px",
                        borderTopRightRadius: "30px",
                      }}
                    >
                      {item.most}
                    </h2>
                  )}
                  <p className="text-center py-6">{item.plan}</p>
                  <div className="max-h-[300px]">
                    <Image
                      src={item.image}
                      alt="product"
                      width={100}
                      height={100}
                      layout="fill"
                      priority
                      className={`block  w-[90%] ${
                        idx === 0 && "w-[55%]"
                      } rounded-xl mx-auto max-h-full h-full ${
                        product.id == 2 && idx === 1 && "w-[50%]"
                      } ${product.id == 7 && idx === 2 && "w-[50%]"}`}
                    />
                  </div>
                  <div className="w-[90%] md:w-[80%] mx-auto">
                    <p
                      className=" text-2xl md:text-[25px] font-semibold text-[#3C3C3C]"
                      style={{ margin: "0", marginTop: "20px" }}
                    >
                      ₦{item.price} NGN
                    </p>
                    <p className="text-center m-0 py-0" style={{ margin: "0" }}>
                      <span
                        className=" bg-[#2fa1f4] text-[white] p-1 text-xs"
                        style={{ borderRadius: "50px" }}
                      >
                        {item.saved}
                      </span>
                    </p>

                    <div className=" text-center text-gray-400 my-4">
                      <span>Regular Price</span>
                      <span className=" text-lg text-4xl md:text-[25px] block">
                        <del>₦{item.prevPrice} NGN</del>
                      </span>
                    </div>
                    <div className="my-4">
                      <Link href="/checkout">
                        <button
                          onClick={() =>
                            addToCart(item.price, item.plan, item.image)
                          }
                          className={` text-white w-full p-3 rounded-lg font-bold text-md md:text-lg md:flex-1  ${
                            checkCart?.inCart
                              ? "bg-gray-500 hover:bg-gray-600"
                              : "bg-[#103CC0]"
                          } btn`}
                        >
                          <AiOutlineShoppingCart className="inline mb-1 mr-1" />
                          {!checkCart?.inCart ? "Add To Cart" : "change cart"}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="my-6 md:my-24 md:w-[80%] mx-auto">
            {product?.contents?.testimonies &&
              product.contents?.testimonies.map((testimony, idx) => (
                <div
                  key={idx}
                  className="p-4"
                  style={{
                    boxShadow: "1px 1px 10px 1px rgba(119, 119, 119,0.3)",
                    borderRadius: "30px",
                  }}
                >
                  <p>
                    <span className="font-[700]"> {testimony.name}.</span>
                    <span className="text-[#20B874] text-sm text-opacity-50">
                      {" "}
                      Verifield Buyer
                    </span>
                  </p>
                  <p>
                    <div>
                      <span className="inline-flex">
                        <AiFillStar fill="#FED00B" size={15} />
                        <AiFillStar fill="#FED00B" size={15} />
                        <AiFillStar fill="#FED00B" size={15} />
                        <AiFillStar fill="#FED00B" size={15} />
                        <AiFillStar fill="#FED00B" size={15} />
                      </span>
                      <span className="text-base">
                        <b>{testimony.title}</b>
                      </span>
                    </div>
                  </p>
                  <p className="text-base text-gray-400 ">
                    {testimony.description}
                  </p>
                </div>
              ))}
          </div>
          {product?.shortpage && (
            <div className="">
              <Link href="/checkout">
                <button
                  onClick={() =>
                    addToCart(product.price, "1 month plan", product.img)
                  }
                  className={` text-white w-full p-3 md:p-6 rounded-lg font-bold text-md md:text-lg md:flex-1  ${
                    checkCart?.inCart
                      ? "bg-gray-500 hover:bg-gray-600"
                      : "bg-[#103CC0]"
                  } btn`}
                >
                  <AiOutlineShoppingCart className="inline mb-1 mr-1" />
                  {!checkCart?.inCart ? "Add To Cart" : "change cart"}
                </button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductItem;
