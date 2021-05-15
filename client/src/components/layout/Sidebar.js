import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarLinks } from "./SidebarLinks";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

function Sidebar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const onLogoutClick = (e) => {
    e.preventDefault();
    props.logoutUser();
  };

  return (
    <div>
      <div className="navbar">
        {/* <Link to="#" className="menu-bars">
          <FaIcons.FaBars />
        </Link> */}
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarLinks.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "0.25rem",
            marginRight: "0.25rem",
            float: "right",
          }}
          onClick={onLogoutClick}
          className="btn btn-large waves-effect waves-light hoverable"
        >
          Logout
        </button>
      </nav>
    </div>
  );
}

// export default Sidebar;

// Define PropType Validators
Sidebar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

// Use mapStateToProps to get state from Redux
const mapStateToProps = (state) => ({
  auth: state.auth,
});

// Utilise redux connect() to link w/component & display form errors
export default connect(mapStateToProps, { logoutUser })(Sidebar);
