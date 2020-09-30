import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/acronyms">
        Acronyms
      </NavLink>
      <NavLink className="nav-link" to="/new">
        Contribute acronym
      </NavLink>
    </div>
  );
};

export default NavBar;
