import React, {useEffect,useState} from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {fetchMessages,sendMessages} from "../redux/actions";


const MessagesList  = ({ channels,messages,getMessages,sendMessage }) => {
    const { CHANNEL_ID } = useParams();
    const [msg, setMsg] = useState(null);
    
    useEffect(() => {
        getMessages(CHANNEL_ID);
      }, [CHANNEL_ID,msg]);




    //which channel?
    const channel = channels.find((channel) => channel.id === +CHANNEL_ID);
    if (!channel) return <Redirect to="/channels" />;

    //messages of one channel
    const channelMessages = messages.filter((message) => message.channel == channel.id);
    const allmessages = channelMessages.map((m) => 
        <div>
            <p>{m.message} at {m.timestamp}</p>
            </div>
    );

  const handleText = (event) =>
  setMsg(event.target.value);

  const handleSend = (event) => {
    //event.preventDefault();
    sendMessage(msg,CHANNEL_ID);
  };
    

    return (
    <div>
      <p>{allmessages}</p>
      <p>
      <form onSubmit={handleSend}>
        <input className="form-control"
        type="text"
        onChange={handleText}></input>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
        </form></p>
      </div>
  
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
      sendMessage: (msg,CHANNEL_ID) => dispatch(sendMessages(msg,CHANNEL_ID)),
    };
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(MessagesList) ;