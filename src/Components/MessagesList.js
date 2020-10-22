import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMessages, sendMessages } from "../redux/actions";

//emoji
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

const MessagesList = ({ channels, messages, getMessages, sendMessage ,user }) => {
  const { CHANNEL_ID } = useParams();
  const [msg, setMsg] = useState({message:""});
  const [emojiView, setEmojiView]=useState(false);
  useEffect(() => {
    getMessages(CHANNEL_ID);
  }, [CHANNEL_ID]);

  //which channel?
  const channel = channels.find((channel) => channel.id === +CHANNEL_ID);
  if (!channel) return <Redirect to="/channels" />;

  //messages of one channel
  //const channelMessages = messages.filter((message) => message.channel == channel.id);
  const allmessages = messages.map((m) => (
    <div>
      {user.username==m.username? "me": m.username}
      <p>
        {m.message} at {m.timestamp}
      </p>
    </div>
  ));

  const handleText = (event) => setMsg(event.target.value);

  const handleSend = (event) => {
    console.log("here sum");
    event.preventDefault();
    sendMessage({ message: msg }, CHANNEL_ID);
    resetinput();
  };
  const resetinput=() =>{
    setMsg({message:""});
  }

  const{ massege}=msg

  const selectemoji= emoji =>{
   let obj=emoji.native
   console.log(obj)
   let m=massege+obj
   //m.toString
   var data = JSON.stringify({m});
   //var data = {message:m.toString()}
    setMsg({...msg,message:m}, CHANNEL_ID)
  }

 
  const handleEmoji=()=>{
    setEmojiView(!emojiView)
  }

  return (
    <div>
      <p>{allmessages}</p>
      <p>
        <form onSubmit={handleSend}>
        <div className="input-group">
                <div className="input-group-append">
                <button className="btn btn-outline-secondary" onClick={handleEmoji}>emojis</button>
                </div>
          <input
            className="form-control"
            type="text"
            onChange={handleText}
          ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
        {
          emojiView?
          <span>
          <Picker onSelect={selectemoji}/>
          </span>:null
          }
      </p>
    </div>
  );
};

const mapStateToProps = ({ channels, messages , user }) => {
  return {
    channels,
    messages,
    user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getMessages: (CHANNEL_ID) => dispatch(fetchMessages(CHANNEL_ID)),
    sendMessage: (newMessage, CHANNEL_ID) =>
      dispatch(sendMessages(newMessage, CHANNEL_ID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
