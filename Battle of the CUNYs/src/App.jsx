import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login.jsx";
import Authentication from "./routes/Authentication.jsx";
import Home from "./routes/Home.jsx";
import Signup from "./routes/Signup.jsx";
import Mascot from "./routes/Mascot.jsx";
import "./App.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                    path="home"
                    element={
                        <Authentication>
                            <Home />
                        </Authentication>
                    }
                />
                <Route
                    path="mascot"
                    element={
                        <Authentication>
                            <Mascot />
                        </Authentication>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
