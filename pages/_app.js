import '../styles/globals.css'
import { ProductContextProvider } from '../context/productContext';
import Footer from '../components/Footer';
import SideBar from './SideBar';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <ProductContextProvider>
      <SideBar />
      <Component {...pageProps} />
    </ProductContextProvider>
  )
}

export default MyApp
