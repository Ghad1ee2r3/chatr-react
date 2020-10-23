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
  const [bot , setBot]=useState(false);
  const [msg, setMsg] = useState({message:""});
  const [emojiView, setEmojiView]=useState(false);

  const [modal, setModal] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    getMessages(CHANNEL_ID);
  }, [CHANNEL_ID]);

  //which channel?
  const channel = channels.find((channel) => channel.id === +CHANNEL_ID);
  if (!channel) return <Redirect to="/channels" />;

  //messages of one channel
  //const channelMessages = messages.filter((message) => message.channel == channel.id);

  //test {user.username=="bot"? name="bot": "me"}
  //const lastItem = messages[messages.length - 1]
  //console.log(lastItem.message)
  //if (lastItem.message=="Hi"){
  //  sendMessage({ message: "welcom to channel" }, CHANNEL_ID);
  //}

  //{getnameuser(m)}
  var name;
  const getnameuser= (m)=>{
    if (user.username==m.username) { if (bot){
      setBot(false)
      return "bot";
    } else return"me"}
    else return user.username}
  
  
  const allmessages = messages.map((m) => (
    <div>
     {getnameuser(m)} 
     
      <p>
        {m.message} at {m.timestamp}
      </p>
    </div>
  ));

  const handleText = (event) => setMsg(event.target.value);

  const handleSend = (event) => {
    console.log("here sum");
   // event.preventDefault();
   // sendMessage({ newMessage: msg }, CHANNEL_ID);
   // setMsg({newMessage:""});
   // resetinput();
   /// mmm{user.username==m.username? name="me": m.username}
   console.log("here sum");
    event.preventDefault();
   //else
     if (msg === "Hi") {
     // user.username="me"
      sendMessage({ message: msg }, CHANNEL_ID);
      alert(`
    WELCOM "${user.username="bot"}"
    `);
    //user.username="bot"
    //sendMessage({ message: msg }, CHANNEL_ID);
    //name="bot"
    setBot(true)
    sendMessage( {  message: 'Hi , i am bot' },CHANNEL_ID);
    //user.username=user

     // alert("Hello !");
    } else if (msg === "t") {
      sendMessage( {  message: "test" },CHANNEL_ID);
    } else if (msg === "ge") {
      sendMessage( {  message: "good evening" },CHANNEL_ID);
    } else {
      sendMessage({ message: msg }, CHANNEL_ID);
    }
  
  };
  //const resetinput=() =>{
   
  //}

  const{ massege}=msg

  const selectemoji= emoji =>{
   let obj=emoji.native
   console.log(obj)
   console.log(massege)
   let m=massege+obj
   console.log(m)
   //m.toString
   var data = JSON.stringify({m});
   //var data = {message:m.toString()}
    setMsg({...msg,message:obj+msg})
  }

 
  const handleEmoji=()=>{
    setEmojiView(true)
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
          {
          emojiView?
          <span>
          <Picker onSelect={selectemoji}/>
          </span>:null
          }
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
       
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
