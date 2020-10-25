import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { timer } from "../redux/actions/messages";

//libraries
import lclStr from "local-storage";
import Picker from "emoji-picker-react";
import swal from "sweetalert";

//src
import { sendMessages, fetchNewMessages, setChannel } from "../redux/actions";
//components
import Messages from "./Messages";
import NewMsg from "./newMessages";

const MessagesList = ({
  channels,
  messages,
  getMessages,
  sendMessage,
  getNewMessages,
  user,
}) => {
  //stats
  const { CHANNEL_ID } = useParams();
  const [msg, setMsg] = useState("");
  const [text, settext] = useState(lclStr.get(`${CHANNEL_ID}`));
  const [chosenEmoji, setChosenEmoji] = useState(false);

  //functions
  useEffect(() => {
    getMessages(CHANNEL_ID);
    settext(lclStr.get(`${CHANNEL_ID}`));
  }, [CHANNEL_ID]);

  //to get messages according to date

  const fetchNew = (latest) => {
    console.log(latest);
    clearInterval(timer);
    getNewMessages(CHANNEL_ID, latest);
  };

  //which channel?
  const channel = channels.find((channel) => channel.id === +CHANNEL_ID);
  if (!channel) return <Redirect to="/channels" />;

  //to handel text in text field (send)
  const handleText = (event) => {
    setMsg(event.target.value);
    settext(event.target.value);
    lclStr.set(`${CHANNEL_ID}`, event.target.value);
  };

  //to handel emoji in text field (send)
  const onEmojiClick = (event, emojiObject) => {
    setMsg(msg + emojiObject.emoji);
    settext(msg + emojiObject.emoji);
    lclStr.set(`${CHANNEL_ID}`, msg + emojiObject.emoji);
  };

  // send the msg to the actions
  const handleSend = (event) => {
    event.preventDefault();
    if (validate(msg)) {
      if (!shortcuts(msg)) {
        console.log("validate(msg)", validate(msg));
        sendMessage({ message: msg }, CHANNEL_ID);
      }

      settext("");
    } else {
      console.log("validate(msg) false", validate(msg));
      settext("Try  nicer words!");
      setMsg("");
      lclStr.set(`${CHANNEL_ID}`, "");
    }
  };

  function validate(g) {
    let badWords = ["ugly"];
    let m = g.toLowerCase().split(" ").join(" ");
    if (m.includes(badWords)) {
      return false;
    } else return true;
  }
  function shortcuts(g) {
    if (msg === "bot") {
      swal({
        title: `WELCOM, ${user.username}`,
        button: "back",
      });
      return true;
    }
    if (msg === "gm") {
      sendMessage({ message: "good morning" }, CHANNEL_ID);
      return true;
    }
    if (msg === "ge") {
      sendMessage({ message: "good evening" }, CHANNEL_ID);
      return true;
    }
    if (msg.toLowerCase().split(" ").join(" ") === "show shortcuts") {
      swal({
        title: "Shortcuts",
        text: "gm : Good Morning\n ge : Good Evening",
        icon: "info",
        button: "back",
      });
      return true;
    } else return false;
  }

  //show emoji window and hide it
  const showEmoji = () => {
    // console.log("here f", chosenEmoji);
    // if (chosenEmoji) {
    //   setChosenEmoji(false);
    // } else {
    //   setChosenEmoji(true);
    //   console.log("here t", chosenEmoji);
    // }
    var x = document.getElementById("em");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
  return (
    <div>
      <div>
        {/* </div><Link to={`/channels/${CHANNEL_ID}/${latest}`}> */}
        <NewMsg fetchNew={fetchNew} />
      </div>
      <div>
        {
          <Messages
            key={CHANNEL_ID}
            user={user}
            messages={messages}
            //bot={bot}
          />
        }
      </div>
      <div>
        <form onSubmit={handleSend}>
          <div className="sendForm input-group mb-3">
            <input
              id="userText"
              //value={text}
              value={text}
              type="text"
              className="form-control"
              placeholder="action can't be undoing"
              onChange={handleText}
            />
            <div className="input-group-append">
              {" "}
              <button className="btn btn-dark ml-1" type="submit">
                Send
              </button>
              <button className="btn btn-dark ml-1" onClick={showEmoji}>
                emoji
              </button>
            </div>{" "}
          </div>
        </form>
      </div>
      <div className="emoji" id="em" style={{ display: "block" }}>
        {<Picker onEmojiClick={onEmojiClick} />}
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
