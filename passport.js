const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const User = require("../models/user");

module.exports = (passport) => {
  const cookieExtractor = (req) => {
    let token = null;
    if (req && req.cookies) {
      // Check if cookie exists & set to token
      token = req.cookies["access_token"];
    }
    return token;
  };

  // JWT Authorization ('cookie'); use for endpoint protection
  passport.use(
    new JWTStrategy(
      {
        // Value from custom function to extract JWT Token
        jwtFromRequest: cookieExtractor,
        // Signature key for JWT Token
        secretOrKey: "Noobular",
      },
      // Verify callback (data = payload)
      (payload, done) => {
        // Check if user exists by ID; primary key = payload.sub
        User.findById({ _id: payload.sub }, (err, user) => {
          if (err) return done(err, false);
          // Return user if not null (post-authentication)
          if (user) return done(null, user);
          // No error, no user with primary key
          else return done(null, false);
        });
      }
    )
  );

  // Define LocalStrategy used to authenticate w/username & passwordd
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
