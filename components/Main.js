import { useContext } from "react";
import productContext from "../context/productContext";
import ProductItem from "./ProductItem";

const Main = () => {
  const { products } = useContext(productContext);

  return (
    <div className="flex flex-col lg:flex-row w-full my-10 mt-24 mx-auto max-w-7xl">
      <div
        className="flex flex-wrap justify-center items-stretch gap-x-2 gap-y-7 md:gap-x-5 md:gap-y-10 w-[95%] mx-auto"
      >
        {products?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Main;
