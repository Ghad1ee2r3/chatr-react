import React from "react";
import { Link } from "react-router-dom";

import { setChannel } from "../redux/actions";

// Components
//import ImageWithPlaceHolder from "./ImageWithPlaceHolder";

const ChannelCard = ({ channel }) => (
  <div className="container">
    <div className="row">
      <Link to={`/channels/${channel.id}`}>
        {channel.image_url ? (
          <div className="col-lg-3 col-md-2 col-2 mr-2">
            <img src={channel.image_url} alt="" />
          </div>
        ) : (
          <div className="col-lg-3 col-md-2 col-12">
            <img
              src="https://cdn2.iconfinder.com/data/icons/user-profile/100/User-512.png"
              alt=""
            />
          </div>
        )}
        <div className="col-lg-9 col-md-10 col-12 ml-3">
          <div className="row">
            <p>
              <span>{channel.name}</span>
              <span> {channel.owner}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  </div>
);

export default ChannelCard;
//className="card-title"
//className="card-body"
