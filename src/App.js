import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AuthContextProvider, useAuthState } from "./contexts/AuthContext";
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

const AuthenticatedRoute = () => {
  //const { isAuthenticated } = useAuthState();
  //console.log(`authenticated:${isAuthenticated}`);
  return (
    <Route
      //{...props}
      //render={(routeProps) =>
        //isAuthenticated ? <C {...routeProps} /> : <Navigate to="/" />
      //}
    />
  );
};
console.log("AAA",AuthenticatedRoute())
const UnAuthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState();
  return (
    <Route
      {...props}
      render={(routeProps) =>
        !isAuthenticated ? <C {...routeProps} /> : <Navigate to="/" />
      }
    />
  );
};

function App() {
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
                  <AuthenticatedRoute exact path="/home" element={<HomePage />} />
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
