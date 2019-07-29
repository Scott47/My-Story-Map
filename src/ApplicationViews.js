import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import Welcome from './welcome/Welcome'
import Login from './welcome/Login'
import Register from '.welcome/Register'


class ApplicationViews extends Component {
    state = {
      users: [],
      stories: [],
      locations: []
    };
}


render() {
    return (
      <React.Fragment>
        <Route exact path="/welcome" render={props => {
            return <Welcome />;
        }}
        />
        <Route path="/register" render={props => {
            return <Register />;
          }}
        />
        <Route path="/login" render={props => {
            return <Login />;
          }}
        />
        </React.Fragment>
    )
}
export default withRouter(ApplicationViews)