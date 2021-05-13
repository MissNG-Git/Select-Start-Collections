import React, { useState } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect, useDispatch } from "react-redux";
// import { loginUser } from "../../actions/authActions";
// import classnames from "classnames";

function Login({ auth }) {
  // CONSTRUCTOR
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors] = useState({});

  // useEffect(() => {
  //   If logged in and user navigates to Register page, should redirect them to dashboard
  //   if (auth.isAuthenticated.errors) {
  //     auth.history.push("/dashboard");
  //   }
  // });

  // useEffect(() => {
  //   if (errors) {
  //     setErrors(errors);
  //   }
  // }, [errors]);

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    console.log(userData);
  };

  // const { errors } = this.state;
  return (
    <div className="container">
      <div style={{ marginTop: "4rem" }} className="row">
        <div className="col s8 offset-s2">
          <Link to="/" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace</i> Back to
            home
          </Link>
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h4>
              <b>Login</b> below
            </h4>
            <p className="grey-text text-darken-1">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
          <form noValidate onSubmit={onSubmit}>
            <div className="input-field col s12">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                error={errors.email}
                id="email"
                type="email"
                // className={classnames("", {
                //   invalid: errors.email || errors.emailNotFound,
                // })}
              />
              <label htmlFor="email">Email</label>
              {/* <span className="red-text">
                  {errors.email}
                  {errors.emailNotFound}
                </span> */}
            </div>
            <div className="input-field col s12">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                error={errors.password}
                id="password"
                type="password"
                // className={classnames("", {
                //   invalid: errors.password || errors.passwordIncorrect,
                // })}
              />
              <label htmlFor="password">Password</label>
              {/* <span className="red-text">
                  {errors.password}
                  {errors.passwordIncorrect}
                </span> */}
            </div>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem",
                }}
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;

// Define PropType Validators

// Use mapStateToProps to get state from Redux and map to props so we can use in components

// Utilise redux connect() to link w/component & display form errors
