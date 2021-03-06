// Import Dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const app = express();
const router = express.Router();
const port = process.env.PORT || 8000;
const users = require("./routes/api/users");
const games = require("./routes/api/games");
// ! Socket.io testing
// const http = require("http").createServer(app);
// const io = require("socket.io")(http);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // app.get("*", (req, res) => {
  //   res.sendFile(path.join(_dirname + "/client/build"));
  // });
}

// Use Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Passport Middleware
app.use(passport.initialize());
// Passport Config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/games", games);
router.use(function (req, res) {
  console.log("no route hit");
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to MongoDB
mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost/select-start-collections",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

// ! Socket.io testing
// app.get("/", function (req, res) {
//   res.send("<h1>Hello world!</h1>");
// });

// io.on("connection", function (socket) {
//   console.log("User connected!");
// });

// http.listen(3001, function () {
//   console.log(`Server listening on: http://localhost:${PORT}!`);
// });

// Start backend server
app.listen(port, () => console.log(`Server running on Port ${port}!`));
