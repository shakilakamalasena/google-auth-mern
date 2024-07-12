import React from "react";
import "./home.scss";

const Home = (userDetails) => {
    console.log(userDetails);
    const user = userDetails.user;

    const logout = () => {
        window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
    };

    return (
        <div className="container">
            <h1 className="heading">Home</h1>
            <div className="form_container">
                <div className="right">
                    <h2>Profile</h2>
                    <img src={user.picture} alt="profile" />
                    <input
                        type="text"
                        defaultValue={user.name}
                        placeholder="Username"
                    />
                    <input
                        type="text"
                        defaultValue={user.email}
                        placeholder="Email"
                    />
                    <button onClick={logout}>Log Out</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
