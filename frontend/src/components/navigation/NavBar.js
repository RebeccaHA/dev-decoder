import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { connect } from "react-redux";

const NavBar = props => {
  return (
    <div className="nav-bar">
      <div>
        <NavLink className="nav-link" to="/">
          <HomeIcon />
        </NavLink>
      </div>
      <div className="nav-group-right">
        <NavLink className="nav-link" to="/acronyms">
          Acronyms
        </NavLink>
        {props.loggedIn ? (
          <NavLink className="nav-link" to="/favourites">
            Favourites
          </NavLink>
        ) : null}

        <NavLink className="nav-link" to="/new">
          Contribute acronym
        </NavLink>
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: state.users.loggedIn
  };
};

export default connect(mapStateToProps)(NavBar);
