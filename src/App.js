import { Routes, Route, useNavigate, createSearchParams } from "react-router-dom"
import { useCart } from './context/cart'


import NavBar  from "./component/navbar/navbar"
import Products from "./component/products/products"
import Product from "./component/product/product"
import Cart from "./component/cart/cart"
import NotFound from "./component/not-found/not-found"
import Payment from "./component/payment/payment"
import Login from "./component/login/login"


function App() {

  const navigate = useNavigate();
  const { cartItemCount } = useCart()

  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }

  return (
    <>
      <NavBar onSearch={onSearch} cartItemCount={cartItemCount()} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/payment" element= {<Payment/>} />
        <Route path="/login" element= {< Login/>} />

      </Routes>
    </>
  );
}

export default App;
