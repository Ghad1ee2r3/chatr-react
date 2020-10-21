import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const MessagesList  = ({ channels,messages }) => {
    const { CHANNEL_ID } = useParams();
    
    const channel = channels.find((channel) => channel.id === +CHANNEL_ID);
    if (!channel) return <Redirect to="/channels" />;

    const channelMessages = messages.filter((message) => message.channel == channel.id);
 
    return (
    <div>{channelMessages}</div>
  
  );}

  const mapStateToProps = ({ channels,messages }) => {
    return {
        channels,
        messages,
    };
  };
  
  export default connect(mapStateToProps)(MessagesList) ;