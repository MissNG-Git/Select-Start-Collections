const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, unique: true, required: true, trim: true },
  username: { type: String, unique: true, required: true, trim: true },
  password: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
