import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import ChannelsList from "./ChannelList";

function App() {
  return (
    <div className="App">
      <div id="app" className="container-fluid">
    <div className="row">
      <div className="col-2">
      </div>
      <div className="content col-10">
        <Switch>
          <Route path="/channels">
            <ChannelsList />
          </Route>
          </Switch>
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
