const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    min: 6,
    max: 15,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  // use games for testing
  games: [{ type: mongoose.Schema.Types.ObjectId, ref: "Game" }],
  //   dateAdded: { type: Date, default: Date.now, required: true },
});

// Mongoose middleware function
// Executes before "save"...
userSchema.pre("save", function (next) {
  // Check if password field is hashed
  if (!this.isModified("password")) return next();
  // Hash if plaintext
  bcrypt.hash(this.password, 10, (err, hashedPassword) => {
    if (err) return next(err);
    this.password = hashedPassword;
    next();
  });
});

// Compare plaintext w/hashedPassword
userSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) return cb(err);
    else {
      // if password provided does not match pw in DB
      if (!isMatch) return cb(null, isMatch);
      // otherwise return user
      return cb(null, this);
    }
  });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
