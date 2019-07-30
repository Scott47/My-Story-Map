import { Route } from 'react-router-dom'
import React, { Component } from "react"
import Welcome from "./welcome/Welcome"
import NavBar from "./nav/Navbar"
import Login from "./welcome/Login"
import Register from "./welcome/Register"
import UserHandler from "./apiManager/UserHandler";

class ApplicationViews extends Component {
  state = {
    users: [],
    locations: [],
    basemaps: [],
    stories: []
  };

  componentDidMount() {
    const newState = {}

    UserHandler.getAll()
    .then(users => this.setState({ users: users }))
  }

  render () {
      return (
        <React.Fragment >
       <Route
          exact path="/welcome" render={props => {
            return <Welcome users={this.state.users} {...props} />;

          }} />
        <Route
          path="/stories" render={props => {
            return <Login users={this.state.users} {...props} />;
          }} />
        <Route
          path="/mystories" render={props => {
            return <Login users={this.state.users} {...props} />;
          }} />
        <Route
          path="/login" render={props => {
            return <Login users={this.state.users} {...props} />;
          }} />
        <Route
          path="/register" render={props => {
            return <Register users={this.state.users} {...props} />;
          }} />
      </React.Fragment>
      )
  }

}

export default ApplicationViews