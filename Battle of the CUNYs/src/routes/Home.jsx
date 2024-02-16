//See mascot in AR moving around
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider.jsx";

export default function Home() {
    const { user } = useAuth();
    const navigate = useNavigate();
    return (
        <>
            Welcome {user.username}
            <button
                onClick={() => navigate("/profile")}>
                mascot stats
            </button>
        </>
    )
}