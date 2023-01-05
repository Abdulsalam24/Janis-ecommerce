import { createContext, useState } from "react";
import Spinner from "../components/Spinner";
import { staticProducts } from "../data/products";

const productContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState([]);

  const addToCart = (price, plan, img) => {
    const exist = cart?.find((x) => x.id === product.id);
    if (exist) {
      setCart([
        { ...product, inCart: true, selectedPrice: price, selectedPlan: plan, selectedImg:img },
      ]);
      return;
    }
    setCart((prev) => [
      ...prev,
      {
        ...product,
        inCart: true,
        selectedPrice: price,
        selectedPlan: plan,
        selectedImg: img,
      },
    ]);
  };

  const getProduct = (id) => {
    setProducts(staticProducts);
    const filteredProduct = products.filter((x) => x.id == id);
    setProduct(filteredProduct[0]);
  };

  const quantityChange = (type, id) => {
    if (type === "INCREMENT") {
      const qtnIncrease = products.map((x) =>
        x.id == id ? { ...x, qtn: product.qtn + 1 } : x
      );
      const f = qtnIncrease.find((x) => x.id === id);
      setProduct(f);
    } else {
      const qtnDecrease = products.map((x) =>
        x.id == id ? { ...x, qtn: --product.qtn } : x
      );
      const f = qtnDecrease.find((x) => x.id === id);

      if (product.qtn < 2) {
        const qtnDecrease1 = products.map((x) =>
          x.id === id ? { ...x, qtn: 1 } : x
        );
        const f = qtnDecrease1.find((x) => x.id === id);

        setProduct(f);
        return;
      }
      setProduct(f);
      return;
    }
  };

  return (
    <productContext.Provider
      value={{
        products,
        product,
        cart,
        isLoading,
        setIsLoading,
        setProducts,
        setProduct,
        setCart,
        quantityChange,
        addToCart,
        getProduct,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default productContext;
