import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

const NavBar = () => {
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
        <NavLink className="nav-link" to="/new">
          Contribute acronym
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
