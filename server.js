const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const app = express();
const port = process.env.PORT || 8000;
// !Users API Route -- Require & Use

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Passport middleware
app.use(passport.initialize());
// !Passport config

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/select-start", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`Server running on Port ${port}!`));
