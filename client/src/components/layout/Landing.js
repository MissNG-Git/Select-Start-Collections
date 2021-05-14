import React from "react";
import { Link } from "react-router-dom";
import sscLogo from "../../sscLogo.svg";

function Landing() {
  return (
    <div style={{ height: "75vh" }} className="container valign-wrapper">
      <div className="row">
        <div className="col s12 center-align">
          <img src={sscLogo} alt="ssc-logo"></img>
          <h4>
            <b>Organise</b> your collections with{" "}
            <span style={{ fontFamily: "monospace" }}>Select-Start</span>!
          </h4>
          <p className="flow-text grey-text text-darken-1">
            An all-in-one: game database, collection manager and chat platform!
            For the gamer looking to keep track of all the games they own and on
            which platform so they do not purchase multiple copies by accident.
            Registered users will also have access to the chat which will allow
            them to socialize with other gamers in the community and make new
            friends 😊
          </p>
          <br />
          <div className="col s4">
            <Link
              to="/register"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
              }}
              className="btn btn-large waves-effect waves-light hoverable blue lighten-1"
            >
              Register
            </Link>
          </div>
          <div className="col s4">
            <Link
              to="/browse"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
              }}
              className="btn btn-large btn-flat waves-effect grey lighten-2 black-text"
            >
              Browse
            </Link>
          </div>
          <div className="col s4">
            <Link
              to="/login"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
              }}
              className="btn btn-large waves-effect waves-light hoverable orange lighten-1"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
