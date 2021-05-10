const User = require("../models/user");
const bcrypt = require("bcryptjs");
var LocalStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  // Define LocalStrategy
  passport.use(
    new LocalStrategy((username, password, done) => {
      // Look up user by username in DB
      User.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        // Check if user[name] exists
        if (!user)
          return done(null, false, {
            message: "Incorrect username!",
          });

        // Check if password is a match
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch === true) {
            return done(null, user);
          } else {
            return done(null, false, {
              message: "Incorrect password!",
            });
          }
        });
      });
    })
  );

  // Serialize to store cookie in browser for user returned from LocalStrategy
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  // Deserialize (unravel) cookie
  passport.deserializeUser((id, cb) => {
    // Find user with _id that matches cookie id
    User.findOne({ _id: id }, (err, user) => {
      cb(err, user);
    });
  });
};
