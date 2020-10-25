import React, { useState } from "react";
import { connect } from "react-redux";

// Actions
import { postChannel } from "../redux/actions";

const ChannelForm = ({ closeModal, postChannel }) => {
  const [channel, setChannel] = useState({
    name: "",
  });

  const submitChannel = (event) => {
    event.preventDefault();
    postChannel(channel, closeModal);
  };

  const onTextchange = (event) =>
    setChannel({ ...channel, [event.target.name]: event.target.value });

  return (
    <div className="mt-5 p-2 cards rounded">
      <form onSubmit={submitChannel} className="">
        <div className="input mb-3">
            <span className="input-text">Name:</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={onTextchange}
          />
         <div>
           <br/>
         <button type="submit" className="btn btn-primary btn-block">
            Create
          </button>
        </div>
       
      
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postChannel: (newChannel, closeModal) =>
      dispatch(postChannel(newChannel, closeModal)),
  };
};

export default connect(null, mapDispatchToProps)(ChannelForm);
