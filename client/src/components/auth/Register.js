import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
// import classnames from "classnames";

function Register() {
  // CONSTRUCTOR
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({});

  // componentDidMount() {
  // If logged in and user navigates to Register page, should redirect them to dashboard
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push("/dashboard");
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.errors) {
  //     this.setState({
  //       errors: nextProps.errors
  //     });
  //   }
  // }

  useEffect(() => {
    if (errors) {
      setErrors(errors);
    }
  }, [errors]);

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      email: email,
      password: password,
      password2: password2,
    };

    console.log(newUser);
    // Access prop
    // this.props.registerUser(newUser, this.props.history);
  };

  // const { errors } = setErrors({});
  return (
    <div className="container">
      <div className="row">
        <div className="col s8 offset-s2">
          <Link to="/" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace</i> Back to
            home
          </Link>
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h4>
              <b>Register</b> below
            </h4>
            <p className="grey-text text-darken-1">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
          <form noValidate onSubmit={onSubmit}>
            <div className="input-field col s12">
              <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                error={errors.username}
                id="username"
                type="text"
                // className={classnames("", {
                //   invalid: errors.name
                // })}
              />
              <label htmlFor="username">Username</label>
              {/* <span className="red-text">{errors.name}</span> */}
            </div>
            <div className="input-field col s12">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                error={errors.email}
                id="email"
                type="email"
                // className={classnames("", {
                //   invalid: errors.email
                // })}
              />
              <label htmlFor="email">Email</label>
              {/* <span className="red-text">{errors.email}</span> */}
            </div>
            <div className="input-field col s12">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                error={errors.password}
                id="password"
                type="password"
                // className={classnames("", {
                //   invalid: errors.password
                // })}
              />
              <label htmlFor="password">Password</label>
              {/* <span className="red-text">{errors.password}</span> */}
            </div>
            <div className="input-field col s12">
              <input
                onChange={(e) => setPassword2(e.target.value)}
                value={password2}
                error={errors.password2}
                id="password2"
                type="password"
                // className={classnames("", {
                //   invalid: errors.password2
                // })}
              />
              <label htmlFor="password2">Confirm Password</label>
              {/* <span className="red-text">{errors.password2}</span> */}
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
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Define PropType Validators
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

// Use mapStateToProps to get state from Redux and map to props so we can use in components
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

// Utilise redux connect() to link w/component & display form errors
// Use withRouter to redirect within action
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
