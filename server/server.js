// import dotenv from "dotenv";
// import express from "express";
// import cors from "cors";
// import passport from "passport";
// import authRoute from "./routes/authRoute.js";
// import cookieSession from "cookie-session";
// import passportStrategy from "./passport.js";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const authRoute = require("./routes/authRoute");
const cookieSession = require("cookie-session");
const passportStrategy = require("./passport");
const app = express();

// dotenv.config();

app.use(
	cookieSession({
		name: "session",
		keys: ["family-todo-app"],
		maxAge: 24 * 60 * 60 * 100,
	})
);


app.use(passport.initialize());
app.use(passport.session());

app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

app.use("/auth", authRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listenting on port ${port}...`));
