// Import Packages
const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 3001;

//----------------------------------------- END OF IMPORTS ---------------------------------------------------

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("../client/public"));
}

// Middleware
app.use(express.json({ extended: true }));
app.use(cookieParser());

//----------------------------------------- END OF MIDDLEWARE ---------------------------------------------------

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

const User = require("./models/user");

const userInput = {
  username: "test",
  password: "123456789",
};

const user = new User(userInput);
user.save((err, doc) => {
  if (err) console.log(err);
  console.log(doc);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Back-end server listening on: http://localhost:${PORT}!`);
});
