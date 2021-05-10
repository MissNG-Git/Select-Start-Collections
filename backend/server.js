// Import Packages
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3001;
//----------------------------------------- END OF IMPORTS ---------------------------------------------------

const User = require("./models/user");

// Mongo Atlas DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/select-start-collections",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("Mongoose Connected!");
  }
);

// Middleware
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));

//----------------------------------------- END OF MIDDLEWARE ---------------------------------------------------

// Routes
app.post("/login", (req, res) => {
  console.log(req.body);
});

app.post("/register", (req, res) => {
  console.log(req.body);
});

app.get("/user", (req, res) => {
  console.log(req.body);
});
//----------------------------------------- END OF ROUTES---------------------------------------------------

// Start Server
app.listen(3001, () => {
  console.log("Server started on http://localhost:3001");
});
