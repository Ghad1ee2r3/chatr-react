import React, { useState } from "react";
import { connect } from "react-redux";

// Components
import ChannelCard from "./ChannelCard";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import App from "../App";
//import Loading from "./Loading";

const ChannelList = ({ channels, user }) => {
  const [query, setQuery] = useState("");

  const filterChannel = () => {
    return channels.filter((channel) => {
      return channel.name.toLowerCase().includes(query.toLowerCase());
    });
  };

  //if (loading) return <Loading />;

  const ChannelCardss = filterChannel().map((channel) => (
    <ChannelCard key={channel.id} channel={channel} />
  ));

  return (
    <div>
      <h3>Channels</h3>

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
