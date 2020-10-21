import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";

//component
import ChannelsList from "./Components/ChannelList";
import MessagesList from "./Components/MessagesList";
import Sidebar from "./Components/Sidebar";
import Signup from "./SignupForm";
import Login from "./LoginForm";


const App = () =>
 // list=props.list
(
 
  <div id="app" className="container-fluid">
    
    <div className="row">
      <div className="col-2">
      <Sidebar />
      </div>
      <div className="content col-10">
        <Switch>

          <Route path="/channels">
          <ChannelsList />
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