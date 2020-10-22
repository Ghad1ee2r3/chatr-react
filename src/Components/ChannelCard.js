import React from "react";
import { Link } from "react-router-dom";

// Components
//import ImageWithPlaceHolder from "./ImageWithPlaceHolder";

const ChannelCard = ({ channel }) => (
  <div className="col-lg-4 col-md-6 col-12">
    <Link to={`/channels/${channel.id}`}>

    <img src={channel.image_url} alt="" />
      <div className="card-body">
        <p className="card-title">
          <span>{channel.name}</span>
          <span>  {channel.owner}</span>
        </p>
        
      </div>
    </Link>
  </div>
);

export default ChannelCard;
