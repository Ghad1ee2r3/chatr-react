import React, { useState } from "react";
import { connect } from "react-redux";

// Components
import ChannelCard from "./ChannelCard";
import SearchBar from "./SearchBar";
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
      <SearchBar onChange={setQuery} />
      {ChannelCardss}
    </div>
  );
};

const mapStateToProps = ({ channels, user }) => ({
  channels,
  // loading: !channels.length,
  user,
});

export default connect(mapStateToProps)(ChannelList);
