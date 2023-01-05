import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowRight } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { convertString } from "../components/ProductItem";
import productContext from "../context/productContext";

const Checkout = () => {
  const initialForm = {
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    city: "",
    state: "",
    phone: "",
  };
  const [formData, setformData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [cartView, setCartView] = useState(true);

  const { cart } = useContext(productContext);

  const cleanPrice = (price) => {
    console.log(price, "prrrrr");
    if (price) {
      return Number(price.split(".")[0].split(",").join(""));
    }
  };

  const total = () => {
    if (cart.length > 1) {
      let res = cart.reduce((a, b) => {
        console.log(
          cleanPrice(a.selectedPrice),
          cleanPrice(b.selectedPrice),
          "res"
        );
        return cleanPrice(a.selectedPrice) + cleanPrice(b.selectedPrice);
      });
    } else {
      return cart[0]?.selectedPrice;
    }
  };

  total();
  const checkout = (e) => {
    e.preventDefault();

    router.push("/success");

    console.log(cart, formData);
  };

  const router = useRouter();

  useEffect(() => {
    if (cart.length === 0) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <section>
        <div className="checkout flex flex-col-reverse py-5 max-w-lg w-[90%] mx-auto lg:flex-row lg:max-w-6xl lg:justify-between lg:gap-10 lg:items-start">
          <form className="lg:w-[60%] lg:border-[#e6e6e6]  lg:border lg:border-y-0  lg:border-r-[#e8e8e8] lg:border-l-0 lg:pr-10">
            <div className="flex flex-col gap-5 mt-5">
              <div>
                <h2 className="text-md">contact information</h2>
              </div>
              <div className="input">
                <label htmlFor="email"></label>
                <input
                  type="text"
                  onChange={(e) => handleChange(e)}
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                />
              </div>
              <div className="input gap-5 flex flex-col md:flex-row">
                <input
                  type="text"
                  onChange={(e) => handleChange(e)}
                  name="firstName"
                  value={formData.firstName}
                  placeholder="Firstname"
                />

                <input
                  type="text"
                  onChange={(e) => handleChange(e)}
                  name="lastName"
                  value={formData.lastName}
                  placeholder="Lastname"
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  onChange={(e) => handleChange(e)}
                  placeholder="Company (Optional)"
                  value={formData.company}
                  name="company"
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  onChange={(e) => handleChange(e)}
                  placeholder="Address"
                  value={formData.address}
                  name="address"
                />
              </div>
              <div className="input gap-5 flex flex-col md:flex-row">
                <input
                  type="text"
                  onChange={(e) => handleChange(e)}
                  placeholder="City"
                  value={formData.city}
                  name="city"
                />
                <input
                  type="text"
                  onChange={(e) => handleChange(e)}
                  placeholder="State"
                  value={formData.state}
                  name="state"
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  onChange={(e) => handleChange(e)}
                  placeholder="Phone"
                  value={formData.phone}
                  name="phone"
                />
              </div>
            </div>

            <div className="flex my-5 font-medium justify-center text-center flex-col-reverse gap-5">
              <Link href="/">
                <p>
                  <span className="text-[#0479b8]">{"<"} </span> Back to product
                </p>
              </Link>

              <button
                onClick={checkout}
                className="bg-[#0087d2] hover:bg-[#0371ac] rounded-md shadow-lg text-white p-5 w-full"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="flex flex-col lg:w-[40%] lg:flex-col-reverse">
            <div className="total" onClick={() => setCartView(!cartView)}>
              <div className="hidden px-3 lg:flex lg:flex-col lg:gap-4 justify-between py-5 border bg-[#fafafa] border-[#e6e6e6] lg:bg-inherit lg:border lg:border-x-0 lg:border-y-[#e8e8e8] lg:py-7">
                <div className="flex justify-between  text-sm">
                  <p className="text-sm">SubTotal</p>
                  <h3 className="mr-3 text-right text-gray-400">
                    <b className="text-black ">#{total() || 0}</b>
                  </h3>
                </div>
                <div className="flex text-md justify-between">
                  <p className="text-sm">Shipping</p>
                  <p>Calculated at next step</p>
                </div>
              </div>

              <div className="flex justify-between py-5 border bg-[#fafafa] border-[#e6e6e6] px-3 lg:bg-inherit lg:border-0 lg:py-7">
                <p className="flex items-center gap-2">
                  <span>Total</span>{" "}
                  {!cartView ? <AiOutlineArrowRight /> : <AiOutlineArrowDown />}
                </p>

                <h3 className="mr-3 text-right text-gray-400">
                  <span>NGN </span>
                  <b className="text-black lg:text-3xl">#{total() || 0}</b>
                </h3>
              </div>
            </div>

            <div className="flex flex-col">
              {cart?.map((cart) => (
                <div
                  className={`${
                    !cartView && "hidden"
                  } w-[90%] mx-auto py-6 flex items-center justify-between font-semibold lg:flex`}
                  key={cart.id}
                >
                  <div className="flex relative items-center gap-3 justify-between ">
                    <div className="relative inline-block">
                      <Image
                        className=" w-[60px] rounded-md border border-[#0000001a]"
                        src={cart.selectedImg}
                        alt="pro-imgage"
                        width={100}
                        height={100}
                      />
                      <span className="absolute w-[100px] text-sm -top-4 -right-7 bg-[#808080] px-1 rounded-full h-5 leading-5 text-white right-0">
                        {cart.selectedPlan}
                      </span>
                    </div>
                    <p className=" text-sm"> {cart.title}</p>
                  </div>
                  <div className="text-sm">
                    <p>{`#${cart.selectedPrice}`}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
