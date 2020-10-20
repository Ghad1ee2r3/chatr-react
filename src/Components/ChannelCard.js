import React from "react";
import { Link } from "react-router-dom";

// Components
//import ImageWithPlaceHolder from "./ImageWithPlaceHolder";

const ChannelCard = ({ channel }) => (
  <div className="col-lg-4 col-md-6 col-12">
    <Link to={`/channels/${channel.id}`} className="card">
      <div className="image">
      <img src={channel.image_url} alt={channel.name} />
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <span>{channel.name}</span>
        </h5>
      </div>
    </Link>
  </div>
);

export default ChannelCard;
