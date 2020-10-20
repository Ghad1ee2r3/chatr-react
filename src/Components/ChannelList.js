import React, { useState } from "react";
import { connect } from "react-redux";

// Components
import AddChannelCard from "./AddChannelCard";
import ChannelCard from "./ChannelCard";
import SearchBar from "./SearchBar";
import Loading from "./Loading";

const ChannelList = ({ channels, loading,user }) => {
  const [query, setQuery] = useState("");

  const filterChannel = () => {
    return channels.filter((channel) => {
      return channel.name.toLowerCase().includes(query.toLowerCase());
    });
  };

  if (loading) return <Loading />;

  const ChannelCards = filterChannel().map((channel) => (
    <ChannelCard
      key={channel.id + channel.name}
      channel={channel}
    />
  ));

  return (
    <div className="authors">
      <h3>Channels</h3>
      <SearchBar onChange={setQuery} />
      <div className="row">
        {user?<AddChannelCard />:<p></p>}

        {ChannelCards}
      </div>
    </div>
  );
};

const mapStateToProps = ({ channels,user }) => ({
    channels,
 // loading: !authors.length,
  user
});

export default connect(mapStateToProps)(ChannelList);