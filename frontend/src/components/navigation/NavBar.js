import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/acronyms">Acronyms</NavLink>
      <NavLink to="/new">Contribute acronym</NavLink>
    </div>
  );
};

export default NavBar;
