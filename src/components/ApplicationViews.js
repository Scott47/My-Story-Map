import { Route, withRouter, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Welcome from "./welcome/Welcome"
import Login from "./welcome/Login"
import Register from "./welcome/Register"
import UserHandler from "./apiManager/UserHandler";
import StoryHandler from "./apiManager/StoryHandler"
import Satellite from "./basemaps/Satellite"
// import Topo from "./basemaps/Topo"
// import Streets from "./basemaps/StreetVector"
// import StreetNight from "./basemaps/StreetNight"
// import NatGeo from "./basemaps/NatGeo"
// import Hybrid from "./basemaps/Hybrid"
import StoryList from "./stories/StoryList"
import StoryView from "./stories/StoryView"
import DashboardList from "./dashboard/DashboardList"
// import Story from './stories/Story';
import BaseMapHandler from './apiManager/BaseMapHandler';


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

  addStory = story =>
    StoryHandler.post(story)
      .then(() => StoryHandler.getAll())
      .then(stories => {
        this.setState({
          stories: stories
        });
      });

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
              return (<DashboardList
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
          }}
        />
        <Route path="/stories/:storyId(\d+)" render={props => {
            return(
              <StoryView basemaps={this.state.basemaps} {...props}/>


            )
          }}/>

          <Route path="/satellite" render={props => {
            return(
              <div style={{ width: '100vw', height: '100vh' }}>
                  <Satellite users={this.state.users} />
                  </div>
            )

          }}/>
          <Route exact path="/stories" render={props => {
            return(
              <div style={{ width: '100vw', height: '100vh' }}>
                  <StoryList stories={this.state.stories} basemaps={this.state.basemaps}/>
                  </div>
            )
          }}/>
      </React.Fragment>
      )
  }
}
 // <div style={{ width: '100vw', height: '100vh' }}>
              //     <Topo users={this.state.users} />
              //     </div>

export default withRouter(ApplicationViews)