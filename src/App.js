import React from "react";
import "./App.css";

//Authentication
import Signup from "./SignupForm";
import Login from "./LoginForm";
import { Switch, Route, Redirect } from "react-router-dom";

//component
import Home from "./Home";
import MessagesList from "./Components/MessagesList";
import Sidebar from "./Components/Sidebar";

const App = () => (
  <div id="app" className="container-fluid">
    <div className="row">
      <div className="col-2">
        <Sidebar />
      </div>
      <div className="content col-10">
        <Switch>
          <Route path="/channels/:CHANNEL_ID">
            <MessagesList />
          </Route>
          <Route path="/channels">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Redirect to="/login" />
        </Switch>
      </div>
    </div>
  </div>
);

export default App;
