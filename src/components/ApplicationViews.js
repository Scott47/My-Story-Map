import { Route, withRouter, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Welcome from "./welcome/Welcome"
import Login from "./welcome/Login"
import Register from "./welcome/Register"
import UserHandler from "./apiManager/UserHandler";
import StoryHandler from "./apiManager/StoryHandler"
import BaseMapHandler from './apiManager/BaseMapHandler';
import StoryView from "./stories/StoryView"
import EditStory from "./stories/EditStory"
import DashboardList from "./dashboard/DashboardList"
import NewStory from './stories/NewStory';
import "./nav/Navbar.css"

class ApplicationViews extends Component {
  state = {
    users: [],
    locations: [],
    basemaps: [],
    stories: [],
    currentUserId: sessionStorage.getItem("userId")
  };

  componentDidMount() {
    const newState = {}
    this.setState({ currentUserId: sessionStorage.getItem("userId") })

    UserHandler.getAll()
    .then(users => this.setState({ users: users }))
    StoryHandler.getAll()
    .then(stories => this.setState({ stories: stories }))
    BaseMapHandler.getAll()
    .then(basemaps => this.setState({ basemaps: basemaps }))
    console.log(this.state.currentUserId)
  }

  addUser = user =>
    UserHandler.post(user)
      .then(() => UserHandler.getAll())
      .then(users =>
        this.setState({
          users: users
        })
      );

  getUserStories = () =>
    StoryHandler.getUserStories(this.state.currentUserId)
      .then(currentUserStories => {
        this.setState({
          currentUserStories: currentUserStories
        })
      })

  isAuthenticated = () => sessionStorage.getItem("userId") !== null;

  render () {
      return (
        <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            if (this.isAuthenticated()) {
              return (
              <DashboardList
                {...props}
                users={this.state.users}
                stories={this.state.stories}
                basemaps={this.state.basemaps}
                getUserStories={this.state.currentUserStories}
                />
              )
            } else {
              return <Redirect to="/welcome" />
            }
          }} />
       <Route
          exact path="/welcome" render={props => {
            return <Welcome users={this.state.users} {...props} />;
          }} />
        <Route
          path="/login" render={props => {
            return <Login users={this.state.users} {...props} />;
          }} />
        <Route
          path="/register" render={props => {
            return (
              <Register users={this.state.users}
                addUser={this.addUser} {...props}
              />
            );
          }} />
        <Route path="/stories/:storyId(\d+)" render={props => {
            return(
              <StoryView basemaps={this.state.basemaps} {...props}/>
            )
          }} />
          <Route exact path="/stories/new" render={props => {
            return(
              <NewStory basemaps={this.state.basemaps} {...props} />
            )
          }} />
          <Route path="/story/edit/:storyId(\d+)" render={props => {
            return (
              <EditStory basemaps={this.state.basemaps} {...props} />
            )
          }} />
      </React.Fragment>
      )
  }
}


export default withRouter(ApplicationViews)