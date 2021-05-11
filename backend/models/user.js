const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    min: [3, "Please enter an email in the correct format."],
    required: [true, "Please enter an email."],
    required: true,
    trim: true,
  },
  username: {
    type: String,
    min: [6, "Your username must be at least 6 characters long."],
    max: 50,
    required: [true, "Please enter a username."],
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    min: [8, "Your password must be at least 8 characters long."],
    required: [true, "Please enter a password."],
  },
  dateAdded: { type: Date, default: Date.now, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
