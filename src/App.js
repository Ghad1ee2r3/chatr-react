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
       <div className="row">
      <div className="col-2">
      </div>
      <div className="content col-10">
        <Switch>
          
          <Route path="/channels/">
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
}

export default App;
