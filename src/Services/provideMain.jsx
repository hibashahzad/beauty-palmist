import React from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UerServices from "./services/UserServices";

import jwt_decode from "jwt-decode";

export const User = React.createContext("");

export const Reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "Login":
      return { ...state, user: action.user, auth: action.auth };
    case "Booking":
      return { ...state, bookingInfo: action.bookingInfo };
    case "Personal":
      return { ...state, personalInfo: action.personalInfo };
  }
};
const MainProvide = ({ children }) => {
  const location = useLocation();
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
      navigate(location.state?.from?.pathname || "/", {
        state: {
          info: location.state?.info,
        },
      });
    }
  };

  const saveBooking = (data = "") => {
    console.log(data);
    dispatch({ type: "Booking", bookingInfo: data });
  };
  const personalBooking = (data = "") => {
    dispatch({ type: "Personal", personalInfo: data });
  };
  const getUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user !== "null") return user;
    return null;
  };
  const handleLogout = () => {
    localStorage.setItem("Token", "");
    localStorage.setItem("user", "");
    dispatch({ type: "Login", auth: false, user: null });
    navigate("/");
  };
  const init = {
    auth: UerServices.isloggedIn(),
    user: UerServices.getloggedInUser(),
    bookingInfo: {},
  };
  const [state, dispatch] = React.useReducer(Reducer, init);

  return (
    <User.Provider
      value={{
        state,
        login,
        getUser,
        handleLogout,
        saveBooking,
        personalBooking,
      }}
    >
      {children}
    </User.Provider>
  );
};
const useAuth = () => {
  return useContext(User);
};

export { MainProvide, useAuth };
