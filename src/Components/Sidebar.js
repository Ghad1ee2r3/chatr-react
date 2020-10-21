import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";


import Login from "../LoginForm";
import Logout from '../Logout';
import {logout} from '../redux/actions';

const Sidebar = ({user,logout}) => (
  <div id="sidebar">
   
    <section>
      <h4 className="menu-item active">
        <NavLink to="/channels">Channel</NavLink>
      </h4>
    </section>

    <div className="menu-item active">
  
  {user ?
  <div>
  <Link to="/logout" className="btn btn-dark m-4 float-left" onClick={() => logout()}>
      Logout
    </Link>
    </div>
    :
  <div><Link to="/login" className="btn btn-info m-2 float-left">
      Login
    </Link>

    <Link to="/signup" className="btn btn-success m-2 float-left">
      Signup
    </Link></div>}
  </div>

  </div>
);

const mapStateToProps = ({user}) => ({user});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar)
