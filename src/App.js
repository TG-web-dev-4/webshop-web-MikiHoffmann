import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { themeLight } from "./styles/Themes";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";

function App() {
  return (
      <ThemeProvider theme={themeLight}>
        <GlobalStyle/>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/details" element={<ProductDetailPage />} />
            <Route path="/cart" element={<ShoppingCartPage />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
  );
}

export default App;
