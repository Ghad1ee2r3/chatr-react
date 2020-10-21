import React from "react";
import { connect } from "react-redux";

// Components
import AddChannel from "./Components/AddChannel";

import "./App.css";
const Home = ({ user }) => (
  <div id="app" className="container-fluid">
    <div className="row">
      <div className="col-2"> {user && <AddChannel />}</div>
      <div className="col-10"></div>
    </div>
  </div>
);

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(Home);
