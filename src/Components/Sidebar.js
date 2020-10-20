import React from "react";
import { NavLink } from "react-router-dom";

// Logo
//import logo from "./assets/theindex.svg";

const Sidebar = () => (
  <div id="sidebar">
   
    <section>
      <h4 className="menu-item active">
        <NavLink to="/channels">Channel</NavLink>
      </h4>
    </section>
  </div>
);

export default Sidebar;
