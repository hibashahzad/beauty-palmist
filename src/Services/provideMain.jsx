import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UerServices from "./services/UserServices";

import jwt_decode from "jwt-decode";

export const User = React.createContext("");

export const Reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "Login":
      return { ...state, user: action.user, auth: action.auth };
  }
};
const MainProvide = ({ children }) => {
  const navigate = useNavigate();
  const [buss, setbuss] = React.useState();
  const login = (token, role = "user", data = "") => {
    var decoded;
    if (token) {
      decoded = jwt_decode(token);
    }

    dispatch({ type: "Login", auth: true, user: decoded });
    if (role == "bussness") {
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/Seller/Dashborad");
    } else {
      navigate("/home");
    }
  };
  const getUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user !== "null") return user;
    return null;
  };
  const init = {
    auth: UerServices.isloggedIn(),
    user: UerServices.getloggedInUser(),
  };
  const [state, dispatch] = React.useReducer(Reducer, init);

  return (
    <User.Provider value={{ state, login, getUser }}>{children}</User.Provider>
  );
};
const useAuth = () => {
  return useContext(User);
};

export { MainProvide, useAuth };
