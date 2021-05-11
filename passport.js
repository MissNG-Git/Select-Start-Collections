const passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

module.exports = (passport) => {
  // Define LocalStrategy
  passport.use(
    new LocalStrategy((username, password, done) => {
      console.log("Passport running...");
      // Look for username in DB
      User.findOne({ username }, (err, user) => {
        // Error with DB
        if (err) return done(err);
        // If username doesn't exist
        if (!user)
          return done(null, false, {
            message: "Invalid username!",
          });
        // Check if password is a match
        user.comparePassword(password, done);
      });
    })
  );
};
