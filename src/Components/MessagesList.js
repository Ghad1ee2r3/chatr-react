import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {
  sendMessages,
  //fetchMessages,
  fetchNewMessages,
  setChannel,
} from "../redux/actions";

import Messages from "./Messages";
import NewMsg from "./newMessages";

//utils
import { currentDate } from "../utils/currentDate";

const MessagesList = ({
  channels,
  messages,
  getMessages,
  sendMessage,
  getNewMessages,
  user,
}) => {
  const { CHANNEL_ID } = useParams();
  const [msg, setMsg] = useState("");
  const [text, settext] = useState("");

  useEffect(() => {
    getMessages(CHANNEL_ID);
    settext("");
  }, [CHANNEL_ID]);

  const fetchNew = () => {
    let latest = currentDate();
    //let latest = "2020 - 10 - 22";
    console.log("current time ", latest);
    getNewMessages(CHANNEL_ID, latest);
  };

  //which channel?
  const channel = channels.find((channel) => channel.id === +CHANNEL_ID);
  if (!channel) return <Redirect to="/channels" />;

  const handleText = (event) => {
    setMsg(event.target.value);
    settext(event.target.value);
  };

  const handleSend = (event) => {
    event.preventDefault();
    sendMessage({ message: msg }, CHANNEL_ID);
    settext("");
  };

  return (
    <div>
      <div className="row">
        <NewMsg fetchNew={fetchNew} />
      </div>
      <div className="message">
        {<Messages key={CHANNEL_ID} user={user} messages={messages} />}
      </div>
      <div className="row">
        <form onSubmit={handleSend}>
          <div className="sendForm input-group mb-3">
            <input
              id="userText"
              value={text}
              type="text"
              className="form-control"
              placeholder="Search"
              onChange={handleText}
            />
            <div className="input-group-append">
              <button className="btn btn-dark" type="submit">
                Send
              </button>
            </div>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ channels, messages, user }) => {
  return {
    channels,
    messages,
    user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getMessages: (CHANNEL_ID) => dispatch(setChannel(CHANNEL_ID)),
    sendMessage: (newMessage, CHANNEL_ID) =>
      dispatch(sendMessages(newMessage, CHANNEL_ID)),
    getNewMessages: (CHANNEL_ID, latest) =>
      dispatch(fetchNewMessages(CHANNEL_ID, latest)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);
