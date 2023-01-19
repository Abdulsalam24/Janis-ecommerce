import { useContext, useState, useEffect } from "react";
import productContext from "../context/productContext";
import ProductItem from "./ProductItem";

const Main = () => {
  const { products, sortBy } = useContext(productContext);
  const [sortProduct, setSortProduct] = useState([]);

  const sorting = () => {
    let sorted = products.sort((a, b) => a[sortBy] - b[sortBy]);
    setSortProduct({ ...sortProduct, sorted });
  };

  return (
    <div className="flex flex-col lg:flex-row w-full my-10 mt-24 mx-auto max-w-[1200px]">
      <div className="flex flex-wrap justify-center items-stretch gap-x-2 gap-y-7 md:gap-x-5 md:gap-y-10 w-[95%] sm:w-[100%] mx-auto">
      

        {sortBy === "sellingStack"
          ? products
              .filter((prod) => prod.sellingStack)
              .sort((a, b) => a[sortBy] - b[sortBy])
              .map((product) => (
                <ProductItem key={product.id} product={product} />
              ))
          : products
              .sort((a, b) => a[sortBy] - b[sortBy])
              .map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
      </div>
    </div>
  );
};

export default Main;
