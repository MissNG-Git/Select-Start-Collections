const User = require("../models/user");
const bcrypt = require("bcryptjs");
var LocalStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  // Define LocalStrategy
  passport.use(
    new LocalStrategy((username, password, done) => {
      // Look up user by username in DB
      User.findOne({
        username: username,
      }).then(
        function (user) {
          // Check if user[name] exists
          if (!user)
            return done(null, false, {
              message: "Incorrect username!",
            });
          // Check if password is a match
          else if (
            // TODO: use .validPassword method in models
            bcrypt.compare(password, user.password, (isMatch) => {
              if (isMatch) {
                return done(null, user);
              } else {
                return done(null, false, {
                  message: "Incorrect password!",
                });
              }
            })
          );
          else
            // If none of the above, return the user
            return done(null, user);
        }.catch((err) => {
          return done(err);
        })
      );
    })
  );

  // Serialize to store cookie in browser for user returned from LocalStrategy
  passport.serializeUser(function (user, cb) {
    cb(null, user.id);
  });

  // Deserialize (unravel) cookie
  passport.deserializeUser(function (id, cb) {
    // Find user with _id that matches cookie id
    User.findOne({ _id: id }, function (err, user) {
      // Store username in DB
      // Restrict data obj that gets sent back
      const userInformation = {
        username: user.username,
      };
      cb(err, userInformation);
    });
  });
};
