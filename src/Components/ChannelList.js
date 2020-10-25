import React, { useState } from "react";
import { connect } from "react-redux";

// Components
import AddChannel from "./AddChannel";
import ChannelCard from "./ChannelCard";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import App from "../App";
//import Loading from "./Loading";

const ChannelList = ({ channels, user }) => {
  return (
    <div>
    <div class="container">
      <h1 class="text"><em>Create Your Own Channel.</em></h1>
  </div>      <div className="row">
          <div className="col-2"> {user && <AddChannel />}</div>
          <div className="col-10"></div>
          {/* {ChannelCardss} */}
        </div>
      </div>
    );
};

const mapStateToProps = ({ channels, user }) => ({
  channels,
  // loading: !channels.length,
  user,
});

export default connect(mapStateToProps)(ChannelList);
