import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../redux/actions";
// Logo
//import logo from "./assets/theindex.svg";

//component
import ChannelList from "./ChannelList";
import ChannelCard from "./ChannelCard";

const Sidebar = ({ user, logout, channels }) => {
  const ChannelCardss = channels.map((channel) => (
    <ChannelCard key={channel.id} channel={channel} />
  ));
  return (
    <div id="sidebar">
      <section>
        <h4 className="menu-item active">
          <NavLink to="/channels">Channel</NavLink>
        </h4>
      </section>
      <div className="menu-item active">
        {user ? (
          <div>
            <Link
              to="/logout"
              className="btn btn-dark m-4 float-left"
              onClick={() => logout()}
            >
              Logout
            </Link>
            <Link to="/logout">{ChannelCardss}</Link>
          </div>
        ) : (
          <div>
            <Link to="/login" className="btn btn-info m-2 float-left">
              Login
            </Link>

            <Link to="/signup" className="btn btn-success m-2 float-left">
              Signup
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ user, channels }) => ({ user, channels });
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
