import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/home";
  const [user, setUser] = useState({
    name: "",
    email: "",
    foodFed: 0,
    foodAmount: 0,
    school: ""
  });
  const [mascot, setMascot] = useState({
    foodEaten: 0,

  })
  const [logIn, setLogIn] = useState(null);
  const [signUp, setSignup] = useState(null);
  const login = (user) => {
    setLogIn(user);
    navigate(redirectPath, {replace: true});
  }
  const logout = () => {
    setUser(null);
  };
  const signup = (user) => {
    setSignup(user);
    navigate(redirectPath, { replace: true });
  }

  return (
    <AuthContext.Provider value={{ user, setUser, mascot, setMascot, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
}
