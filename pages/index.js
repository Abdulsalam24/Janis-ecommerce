import { useContext, useEffect, useState } from "react"
import Spinner from '../components/Spinner';
import Main from "../components/Main"
import Meta from "../components/Meta"
import Nav from "../components/Nav";
import { staticProducts } from "../data/products"
import productContext from "../context/productContext";
import Footer from "../components/Footer";


export default function Home() {
  const [isError, setIsError] = useState(false)

  const { setProducts, isLoading, setIsLoading } = useContext(productContext)

  useEffect(() => {
    let mount = true
    const fecthProducts = () => {
      try {
        if (mount) {
          setProducts(staticProducts)
          setIsLoading(false)
        }
      } catch (error) {
        setIsError(true)
      }
    }
    fecthProducts()
    return () => {
      mount = false
    }
  }, [])


  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="bg-[#f5f5f5] main_wrapper">
      <div className="sideNav">
        <div className="contents">ds</div>
      </div>
      <Meta />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}
