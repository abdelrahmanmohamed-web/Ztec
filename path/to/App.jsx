import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { ProductsContext } from "./context/ProductsContext";
import ActiveCategoryProvider from "./context/CategoryContext";
import { CartProvider } from "./context/CartContext";

import products from "./data/products.json";

import Header from "./components/Header/header";
import CartIcon from "./components/Cart/CartIcon";
import Main from "./components/Main/mainContent";
import Shop from "./components/Shop/mainShop";
import ProductPage from "./components/ProductPage/ProductPage";
import Footer from "./components/Footer/footer";
import CheckoutPage from "./components/Cart/CheckOut/CheckOutPage";
import Cart from "./components/Cart/Cart";
import { EmptyInputGroup } from "./components/404";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <CartProvider>
      <ProductsContext value={{ products }}>
        <div className="w-full max-w-screen-xl m-auto md:px-6">
          <CartIcon />
          <Header isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
          <div className={`dark:bg-stone-900 ${isDarkMode ? "bg-black" : "bg-white"} mt-32 md:mt-40`}>
            <ActiveCategoryProvider>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="*" element={<EmptyInputGroup />} />
              </Routes>
            </ActiveCategoryProvider>
          </div>
          <Footer />
        </div>
      </ProductsContext>
    </CartProvider>
  );
}

export default App;
