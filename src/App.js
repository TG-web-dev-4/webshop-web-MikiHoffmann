import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { AuthContextProvider, useAuth } from "./contexts/AuthContext";
//import { AuthenticatedRoute, UnAuthenticatedRoute } from "./components/AuthenticatedRoutes";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { themeLight } from "./styles/Themes";

import ScrollToTop from "./components/mainComponents/ScrollToTop";
import { StyledMain } from "./components/styledComponents/Main.styled";
import Header from "./components/mainComponents/Header";
import NavBar from "./components/mainComponents/NavBar";
import Footer from "./components/mainComponents/Footer";

import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CartPage from "./pages/CartPage";
import SignUpForm from "./components/SignUpForm";
import ResetForm from "./components/ResetForm";



function App() {
  
  const currentUser = useAuth()
  console.log(currentUser)
  return (
    <>
      <ThemeProvider theme={themeLight}>
        <GlobalStyle />
        <AuthContextProvider>
          <Router>
            <Header />
            <NavBar />
            <StyledMain className="backgroundImg">
              <ScrollToTop>
                <Routes>
                  <Route exact path="/" element={<SignInPage />} />
                  <Route exact path="/home" element={<HomePage />} />
                  <Route exact path="/products" element={<ProductsPage />} />
                  <Route exact path="/details/" element={<DetailsPage />} />
                  <Route exact path="/cart" element={<CartPage />} />
                  <Route exact path="/signup" element={<SignUpForm />} />
                  <Route exact path="/reset" element={<ResetForm />} />
                </Routes>
                <Footer />
              </ScrollToTop>
            </StyledMain>
          </Router>
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
