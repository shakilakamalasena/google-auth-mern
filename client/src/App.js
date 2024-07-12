import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./routes/home/Home";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import { useEffect, useState } from "react";

function App() {
    const [user, setUser] = useState(null);

    const getUser = async () => {
        try {
            const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
            const { data } = await axios.get(url, { withCredentials: true });
            setUser(data.user._json);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="App">
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        user ? <Home user={user} /> : <Navigate to="/login" />
                    }
                />
                <Route
                    exact
                    path="/login"
                    element={user ? <Navigate to="/" /> : <Login />}
                />
                <Route
                    path="/register"
                    element={user ? <Navigate to="/" /> : <Register />}
                />
            </Routes>
        </div>
    );
}

export default App;
