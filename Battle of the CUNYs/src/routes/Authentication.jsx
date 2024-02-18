import React from "react";
import { useAuth } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

export default function Authentication({ children }) {
    const { user } = useAuth();
    const location = useLocation();

    console.log(user);
    if (!user.name) {
        return <Navigate to="/" state={{ path: location.pathname }} />;
    }

    return children;
};