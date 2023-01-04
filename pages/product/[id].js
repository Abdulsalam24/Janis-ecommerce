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
    <div className="bg-[#F5F5F5] mt-24 ">
      <Nav />
      <main className="w-full my-10 mx-auto max-w-[400px] md:max-w-[1200px]">
        <div className="btn pl-5">
          <Link href="/">
            <button className="flex gap-1 items-center py-3 px-3 mb-4 rounded-md bg-[#8c8c8c] text-white">
              <AiOutlineArrowLeft /> <span>Back</span>
            </button>
          </Link>
        </div>
        <div className="text-center">
          <p
            className="my-2 text-4xl lg:text-6xl font-semibold"
            style={{ color: product?.colorTitle }}
          >
            {product.title}
          </p>
          <p
            className="my-2 text-md md:text-xl font-medium"
            style={{ color: product?.colorDesc }}
          >
            {product.description}
          </p>
          <div className="md:w-[50%] bg-[#f8f8f8] shadow-sm mx-auto max-w-xl flex justify-center">
            <Image
              src={product.img}
              alt="product"
              width={100}
              height={100}
              layout="fill"
              priority
              className="block my-20 w-[400px] md:rounded-xl"
            />
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <p className="font-bold ">
              <span className="text-4xl text-[#818191]">₦{product.price}</span>
            </p>
            <span className="text-gray-400 text-base">
              <del>₦{product.formerPrice}</del>
            </span>
          </div>
          <div className="flex flex-col gap-2 md:w-[50%] py-5 px-3"></div>
        </div>
        <div className="contents_wrap  w-[90%] md:w-[70%] mx-auto">
          <h2 className="text-center my-4 text-2xl font-semibold">
            <strong>{product.contents?.head1}</strong>
          </h2>
          <div>
            {product.contents?.text1.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
          <h2
            style={{ color: product?.colorTitle }}
            className="my-6 text-2xl font-semibold"
          >
            {product.contents?.head2}
          </h2>
          <div>
            {product.contents?.text2.map((text, idx) => (
              <p key={idx} className={`${idx == 0 && "font-semibold"}`}>
                {text}
              </p>
            ))}
          </div>
          <h2 className="my-4 text-2xl font-semibold">
            {product.contents?.head3}
          </h2>
          <div>
            {product.contents?.list1.map((text, idx) => (
              <p key={idx}>
                <span style={{ color: product.colorList }}>
                  {product.contents.listType}
                </span>
                {text}
              </p>
            ))}
          </div>

          <h1 className="mt-8 text-center">Pricing Table</h1>
          <div className="my-8 flex flex-col md:flex-row gap-2">
            {product.contents?.pricingTable.map((item, idx) => (
              <div key={idx} className="text-center">
                <p>{item.plan}</p>
                <Image
                  src={item.image}
                  alt="product"
                  width={100}
                  height={100}
                  layout="fill"
                  priority
                  className="block my-20 w-[400px] md:rounded-xl"
                />
                {item.most && <h2>{item.most}</h2>}
                <h3>₦{item.price}</h3>
                <p>Regular Price</p>
                <p>
                  <del>₦{item.prevPrice}</del>
                </p>
                <p>{item.saved}</p>
                <div className="">
                  <Link href="/checkout">
                    <button
                      onClick={() => addToCart(item.price)}
                      className={` text-white w-full p-3 rounded-lg font-bold text-md md:text-lg md:flex-1  ${
                        checkCart?.inCart
                          ? "bg-gray-500 hover:bg-gray-600"
                          : "bg-blue"
                      }`}
                    >
                      <AiOutlineShoppingCart className="inline mb-1 mr-1" />
                      {!checkCart?.inCart ? "Add To Cart" : "change cart"}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="my-12">
            {product.contents?.testimonies.map((testimony, idx) => (
              <div key={idx}>
                <p>
                  {testimony.name} <br /> *****{testimony.title}
                </p>
                <p>{testimony.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductItem;
