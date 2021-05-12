const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const app = express();
const port = process.env.PORT || 8000;
const users = require("./routes/api/users");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

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
