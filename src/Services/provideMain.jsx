import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UerServices from "./services/UserServices";

export const User = React.createContext("");

export const Reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "Login":
      return { ...state, Token: action.payload };
  }
};
const MainProvide = ({ children }) => {
  const navigate = useNavigate();
  const login = () => {
    dispatch({ type: "Login", payload: true });
    navigate("/home");
  };
  const init = {
    Token: UerServices.isloggedIn(),
  };
  const [state, dispatch] = React.useReducer(Reducer, init);

  return <User.Provider value={{ state, login }}>{children}</User.Provider>;
};
const useAuth = () => {
  return useContext(User);
};

export { MainProvide, useAuth };
