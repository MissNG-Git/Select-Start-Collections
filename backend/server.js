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
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);
//----------------------------------------- END OF MIDDLEWARE ---------------------------------------------------

// Routes
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("User doesn't exist!");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully authenticated!");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User already exists!");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("Account created!");
    }
  });
});

app.get("/user", (req, res) => {
  // Return authenticated user within req.user
  res.send(req.user);
});
//----------------------------------------- END OF ROUTES---------------------------------------------------

// Start Server
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}!`);
});
