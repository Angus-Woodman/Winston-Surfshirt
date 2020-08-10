import React, { Component } from 'react';
import Welcome from "./Container/Welcome";
import AlbumsContainer from "./Container/AlbumsContainer";
import { Switch, Route, NavLink } from "react-router-dom";
import './style.css';

class App extends React.Component {
    render() {
      return (
          <>
              <NavLink to="/" activeClassName="current">
                Home{"   "}
              </NavLink>
              <NavLink to="/albums" activeClassName="current">
                Albums{"   "}
              </NavLink>

              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/albums" component={AlbumsContainer} />
              </Switch>
          </>
      )
    }
  }
export default App
