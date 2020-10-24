import React, { useEffect, useRef } from "react";

//import newMessages from "./newMessages";

const Messages = ({ messages, user }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    try {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    } catch {
      console.log("Ref is null");
    }
  };

  const allmessages = messages.map((m) => (
    <div>
      <p>
        {user.username === m.username ? (
          <div className="message-username">me</div>
        ) : (
          <div className="message-username">{m.username}:</div>
        )}
      </p>
      <div className="conten-message">
        {" "}
        <p>
          <text>{m.message} </text> <time>{m.timestamp}</time>
        </p>
      </div>
    </div>
  ));
  return (
    <div>
      {allmessages}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
