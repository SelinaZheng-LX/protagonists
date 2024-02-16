import React, { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AuthContext = useContext(null);

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || "/profile";
    const [user, setUser] = useState({
        username: "",
    });
    const login = (user) => {
        setUser({username: user});
        navigate(redirectPath, {replace: true});
    }
    const logout = () => {
        setUser({ username: ""});
    };
    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
    return useContext(AuthContext)
}
