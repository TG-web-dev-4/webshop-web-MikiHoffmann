import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuthState } from "../contexts/AuthContext";
//const navigate = useNavigate();

const { currentUser } = useAuthState();
console.log(currentUser)
console.log(`authenticated:${isAuthenticated}`);
export const AuthenticatedRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? <Component {...props} /> : <Navigate to="/" />
        }
      ></Route>
    );
  };
  console.log("AAA",AuthenticatedRoute())
  export const UnAuthenticatedRoute = ({ component: C, ...children }) => {
    const { isAuthenticated } = useAuthState();
    return (
      <Route
        {...children}
        render={(routeProps) =>
          !isAuthenticated ? <C {...routeProps} /> : <Navigate to="/" />
        }
      />
    );
  };