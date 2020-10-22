import React from "react";
import { Link } from "react-router-dom";

import { setChannel } from "../redux/actions";

// Components
//import ImageWithPlaceHolder from "./ImageWithPlaceHolder";

const ChannelCard = ({ channel }) => (
  <div className="col-lg-4 col-md-6 col-12">
    <Link to={`/channels/${channel.id}`} onClick={() => setChannel(channel.id)}>
      {channel.image_url ? (
        <img src={channel.image_url} alt="" />
      ) : (
        <img
          src="https://cdn2.iconfinder.com/data/icons/user-profile/100/User-512.png"
          alt=""
        />
      )}

      <div className="card-body">
        <p className="card-title">
          <span>{channel.name}</span>
          <span> {channel.owner}</span>
        </p>
      </div>
    </Link>
  </div>
);

export default ChannelCard;
