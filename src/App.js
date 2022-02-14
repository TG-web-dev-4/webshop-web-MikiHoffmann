import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { themeLight } from "./styles/Themes";

import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SignInPage from "./pages/SignInPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <GlobalStyle />
      <Router>
        <Header />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/details" element={<ProductDetailPage />} />
            <Route path="/signIn" element={<SignInPage />} />
            <Route path="/cart" element={<ShoppingCartPage />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  );
}

export default App;
