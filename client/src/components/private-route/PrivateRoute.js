import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Define privateRoute to render components / props if isAuth = true, else redirect
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

// Define PropType Validators
PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

// Use mapStateToProps to get state from Redux and map to props so we can use in components
const mapStateToProps = (state) => ({
  auth: state.auth,
});

// Utilise redux connect() to link w/component
export default connect(mapStateToProps)(PrivateRoute);
