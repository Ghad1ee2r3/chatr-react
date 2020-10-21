import React from 'react';
import './App.css';

//Authentication
import Signup from "./SignupForm";
import Login from "./LoginForm";
import { Switch, Route, Redirect } from "react-router-dom";

//component
import ChannelsList from "./Components/ChannelList";
import Sidebar from "./Components/Sidebar";

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
      <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
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
