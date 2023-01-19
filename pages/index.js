import { useContext, useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Main from "../components/Main";
import Meta from "../components/Meta";
import Nav from "../components/Nav";
import { staticProducts } from "../data/products";
import productContext from "../context/productContext";
import Footer from "../components/Footer";
import BootstrapCarousel from "../components/Carousel";
import Image from "next/image";

import productImg2 from "../assets/img/ArjunaPlus.png";
import productImg3 from "../assets/img/AR1.png";
import productImg4 from "../assets/img/Cardio-Vital.png";
import productImg5 from "../assets/img/A1.png";
import productImg6 from "../assets/img/BCG-35.png";
import icon1 from "../assets/img/home-icon-1.svg";
import icon2 from "../assets/img/home-icon-2.svg";
import icon3 from "../assets/img/home-icon-3.svg";
import icon4 from "../assets/img/home-icon-4.svg";

export default function Home() {
  const [isError, setIsError] = useState(false);

  const {
    setProducts,
    isLoading,
    setIsLoading,
    sorProduct,
    issOpen,
    setissOpen,
  } = useContext(productContext);

  useEffect(() => {
    let mount = true;
    const fecthProducts = () => {
      try {
        if (mount) {
          setProducts(staticProducts);
          setIsLoading(false);
        }
      } catch (error) {
        setIsError(true);
      }
    };
    fecthProducts();
    return () => {
      mount = false;
    };
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  const products = [
    {
      name: "ArjunaPlus",
      img: productImg2,
    },
    {
      name: "AJUNOLIVE",
      img: productImg3,
    },
    {
      name: "CARDIO-VITAL",
      img: productImg4,
    },
    {
      name: "ASWAGANDHA DS",
      img: productImg5,
    },
    {
      name: "BCG-35",
      img: productImg6,
    },
  ];

  const icons = [
    {
      name: "Non-GMO",
      img: icon1,
    },
    {
      name: "GMP Certified",
      img: icon2,
    },
    {
      name: "No Artificial Colors or Flavors",
      img: icon3,
    },
    {
      name: "Vegan Options",
      img: icon4,
    },
  ];

  return (
    <div className="bg-[#f5f5f5] main_wrapper">
      <Meta />
      <Nav />
      <BootstrapCarousel />

      <div>
        <h1 className="text-center mt-14">SHOP BY GOAL</h1>
        <div className="w-[90%] md:w-[80%] flex m-auto justify-between md:gap-1 mb-4 flex-wrap">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="p-[20px] bg-white w-[47%] mt-4  md:my-[50px] md:w-[18%]"
              style={{
                borderRadius: "10px",
              }}
            >
              <Image
                src={product.img}
                alt="product"
                width="30%"
                layout="fill"
                priority
              />
              <h3 className="text-[16px] text-center mt-2">{product.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div
        className="w-[90%] max-w-[1440px] m-auto my-[140px] bg-white pt-1
      "
      >
        <h1 className="text-center mt-14">
          Clean, natural, effective products you can trust.
        </h1>
        <div className="md:w-[60%] flex m-auto justify-between md:gap-5 bg-white flex-wrap my-[50%]">
          {icons.map((icon, idx) => (
            <div
              key={idx}
              className="p-[20px] bg-white w-[50%] md:w-[20%] text-center"
            >
              <Image
                src={icon.img}
                alt="icon"
                width="30%"
                layout="fill"
                priority
                className="m-auto md:w-[30%]"
              />
              <h3 className="text-[16px] text-center mt-2">{icon.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
