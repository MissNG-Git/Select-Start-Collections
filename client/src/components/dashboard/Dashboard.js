import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Charts from "../charts/Charts";
import ssc from "../../ssc.svg";

function Dashboard(props) {
  console.log(props);
  const { user } = props.auth;

  const onLogoutClick = (e) => {
    e.preventDefault();
    props.logoutUser();
  };

  return (
    <div style={{ height: "75vh" }} className="container">
      <div>
        <ul id="slide-out" className="sidenav sidenav-fixed">
          <li className="logo">
            {/* <a id="logo-container" href="/dashboard" className="brand-logo"> */}
            <img src={ssc} className="App-logo" alt="logo" />
            {/* </a> */}
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/collections">Collections</a>
          </li>
          <li>
            <a href="/chat">Chat</a>
          </li>
        </ul>
      </div>

      <div className="row">
        <div className="landing-copy col s12 center-align">
          <h4>
            <b>Welcome to your Dashboard,</b> {user.username.split(" ")[0]}
            <p className="flow-text grey-text text-darken-1">
              You are logged into{" "}
              <span style={{ fontFamily: "monospace" }}>
                Select-Start Collections
              </span>{" "}
              👏
            </p>
          </h4>

          <button
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem",
            }}
            onClick={onLogoutClick}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
          >
            Logout
          </button>

          <Charts />
        </div>
      </div>
    </div>
  );
}

// Define PropType Validators
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

// Use mapStateToProps to get state from Redux
const mapStateToProps = (state) => ({
  auth: state.auth,
});

// Utilise redux connect() to link w/component & display form errors
export default connect(mapStateToProps, { logoutUser })(Dashboard);
