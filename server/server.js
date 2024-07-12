require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
const session = require("express-session");
const passportSetup = require("./passport");
const authRoute = require("./routes/auth.route");
const app = express();

// app.use(
//     cookieSession({
//         name: "session",
//         keys: ["doinkcozyy"],
//         maxAge: 24 * 60 * 60 * 100,
//     })
// );

app.use(
    session({
        secret: "doinkcozyy", // Use a strong secret
        resave: false,
        saveUninitialized: true,
        cookie: { secure: "auto", maxAge: 24 * 60 * 60 * 1000 }, // Adjust cookie settings as needed
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET, POST, PUT, DELETE",
        credentials: true,
    })
);

app.use("/auth", authRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
