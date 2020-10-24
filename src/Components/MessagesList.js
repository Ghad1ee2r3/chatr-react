import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
//libraries
import lclStr from "local-storage";
import Picker from "emoji-picker-react";

//src
import { sendMessages, fetchNewMessages, setChannel } from "../redux/actions";
//components
import Messages from "./Messages";
import NewMsg from "./newMessages";

//utils
import { currentDate, capitalizeWords } from "../utils/utils";

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
  //const [bot, setMybot] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(false);

  //functions
  useEffect(() => {
    getMessages(CHANNEL_ID);
    settext(lclStr.get(`${CHANNEL_ID}`));
  }, [CHANNEL_ID]);

  //to get messages according to date
  const fetchNew = () => {
    let latest = currentDate();
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
    const toCapital = capitalizeWords(msg);
    sendMessage({ message: toCapital }, CHANNEL_ID);
    settext("");
    setMsg("");
    lclStr.set(`${CHANNEL_ID}`, "");
    //bot(msg);
    //setMybot(false);

    // function bot(g) {
    //   if (g == "hello") {
    //     setMybot(true);
    //     sendMessage({ message: "Hi, I am bot" }, CHANNEL_ID);
    //   }
    // }
    //     if (msg === "bot") {
    //       alert(`
    //     WELCOM "${user.username}"
    //     `);
    //      // alert("Hello !");
    //     } else if (msg === "t") {
    //       sendMessage( {  message: "test" },CHANNEL_ID);
    //     } else if (msg === "ge") {
    //       sendMessage( {  message: "good evening" },CHANNEL_ID);
    //     } else {
    //       sendMessage({ message: msg }, CHANNEL_ID);
    //     }
  };

  //show emoji window and hide it
  const showEmoji = () => {
    console.log("here", chosenEmoji);
    if (chosenEmoji) {
      setChosenEmoji(false);
    } else {
      setChosenEmoji(true);
    }
  };

  return (
    <div>
      <div>
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
      <div className="emoji">
        {chosenEmoji && <Picker onEmojiClick={onEmojiClick} />}
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
