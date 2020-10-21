import React from "react";
import { Link } from "react-router-dom";

// Components
//import ImageWithPlaceHolder from "./ImageWithPlaceHolder";

const ChannelCard = ({ channel }) => (
  <div>
    <Link to={`/channels/${channel.id}`}>
      <span>{channel.name}</span>
    </Link>
  </div>
);

export default ChannelCard;
