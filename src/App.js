import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";

//component
import ChannelsList from "./Components/ChannelList";
import Sidebar from "./Components/Sidebar";
import Signup from "./SignupForm";
import Login from "./LoginForm";
import Logout from "./Logout";

function App() {
  return (
    <div className="App">
      
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
          <Redirect to="/channels" />
        </Switch>
         
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
