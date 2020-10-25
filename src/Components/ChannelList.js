import React, { useState } from "react";
import { connect } from "react-redux";

// Components
import AddChannel from "./AddChannel";

const ChannelList = ({ user }) => {
  return (
    <div>
      <div class="container">
        <h1 class="text">
          <em>Create Your Own Channel.</em>
        </h1>
      </div>{" "}
      <div className="row">
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
