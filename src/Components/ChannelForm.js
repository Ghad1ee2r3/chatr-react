import React, { useState } from "react";
import { connect } from "react-redux";

// Actions
import { postChannel } from "../redux/actions";

const ChannelForm = ({ closeModal, postChannel }) => {
  const [channel, setChannel] = useState({
    name: ""
   
  });

  const submitChannel = (event) => {
    event.preventDefault();
    postChannel(channel, closeModal);
  };

  const onTextchange = (event) =>
  setChannel({ ...channel, [event.target.name]: event.target.value });

  return (
    <div  width="100" height="200">
      <form onSubmit={submitChannel}  width="50" height="200">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Name</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={onTextchange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
            create
            </button>
       
        
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
