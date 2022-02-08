import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import GlobalStyle from "./styles/GlobalStyle";
import { themeLight } from "./styles/Themes";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import { setProducts } from "./state/actions/productAction";

function App() {
  const productsData = require("./data/productsData.json");

  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cartItems);
  useEffect(() => {
    dispatch(setProducts(productsData.products));
  }, [dispatch, productsData]);
  
  return (
    <ThemeProvider theme={themeLight}>
      <GlobalStyle />
      <Router>
        <Header cartItems={cartItems}/>
        <Routes>
          <Route path="/" element={<HomePage allProducts={allProducts} />} />
          <Route
            path="/products"
            element={<ProductPage allProducts={allProducts} />}
          />
          <Route path="/details" element={<ProductDetailPage />} />
          <Route path="/cart" element={<ShoppingCartPage cartItems={cartItems}/>} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
