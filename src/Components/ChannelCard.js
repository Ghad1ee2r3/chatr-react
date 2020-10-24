import React from "react";
import { Link } from "react-router-dom";

import { setChannel } from "../redux/actions";

// Components
//import ImageWithPlaceHolder from "./ImageWithPlaceHolder";

const ChannelCard = ({ channel }) => (
  <div>
    <Link to={`/channels/${channel.id}`}>
      {channel.image_url ? (
        <div className="m-2 col-lg-4 col-md-6 col-12">
          <img src={channel.image_url} alt="" />
        </div>
      ) : (
        <div className=" m-2 col-lg-4 col-md-6 col-12">
          {" "}
          <img
            src="https://cdn2.iconfinder.com/data/icons/user-profile/100/User-512.png"
            alt=""
          />
        </div>
      )}

      <div className=" m-2 col-lg-8 col-md-6 col-12">
        <p>
          <span>{channel.name}</span>
          <span> {channel.owner}</span>
        </p>
      </div>
    </Link>
  </div>
);

export default ChannelCard;
//className="card-title"
//className="card-body"
