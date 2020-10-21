import React, {useEffect} from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {fetchMessages} from "../redux/actions";


const MessagesList  = ({ channels,messages,getMessages }) => {
    const { CHANNEL_ID } = useParams();
    useEffect(() => {
        getMessages(CHANNEL_ID);
      }, [CHANNEL_ID]);
    
    const channel = channels.find((channel) => channel.id === +CHANNEL_ID);
    if (!channel) return <Redirect to="/channels" />;

    const channelMessages = messages.filter((message) => message.channel == channel.id);
    const allmessages = channelMessages.map((m) => 
        <div>
            <p>{m.message} at {m.timestamp}</p>
            </div>
    );
    

    return (
    <div>{allmessages}</div>
  
  );}

  const mapStateToProps = ({ channels,messages }) => {
    return {
        channels,
        messages,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      getMessages: (CHANNEL_ID) => dispatch(fetchMessages(CHANNEL_ID)),
    };
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(MessagesList) ;