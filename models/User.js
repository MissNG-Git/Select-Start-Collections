// Import dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create UserSchema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Export the model
module.exports = User = mongoose.model("users", UserSchema);