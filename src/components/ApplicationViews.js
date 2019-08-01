import { Route, withRouter, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Welcome from "./welcome/Welcome"
import Login from "./welcome/Login"
import Register from "./welcome/Register"
import UserHandler from "./apiManager/UserHandler";
import StoryHandler from "./apiManager/StoryHandler"
import Satellite from "./basemaps/Satellite"
import Topo from "./basemaps/Topo"
import Streets from "./basemaps/StreetVector"
import StreetNight from "./basemaps/StreetNight"
import NatGeo from "./basemaps/NatGeo"
import Hybrid from "./basemaps/Hybrid"
import StoryList from "./stories/StoryList"
import DashboardList from "./dashboard/DashboardList"
import Story from './stories/Story';
import BaseMapHandler from './apiManager/BaseMapHandler';


class ApplicationViews extends Component {
  state = {
    users: [],
    locations: [],
    basemaps: [],
    stories: []
  };

  componentDidMount() {
    const newState = {}
    // const container = this.mapDiv.current;
    // const basemap = themeToBasemap(this.props.themeToBasemap)
    // loadMap(container, basemap)
    // .when(view => { this.view = view })

    UserHandler.getAll()
    .then(users => this.setState({ users: users }))
    StoryHandler.getAll()
    .then(stories => this.setState({ stories: stories }))
    BaseMapHandler.getAll()
    .then(basemaps => this.setState({ basemaps: basemaps }))
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
        <Route path="/topo" render={props => {
            return(
              <div style={{ width: '100vw', height: '100vh' }}>
                  <Topo users={this.state.users} />
                  </div>
            )
          }}/>
          <Route path="/satellite" render={props => {
            return(
              <div style={{ width: '100vw', height: '100vh' }}>
                  <Satellite users={this.state.users} />
                  </div>
            )
          }}/>
          <Route path="/streets" render={props => {
            return(
              <div style={{ width: '100vw', height: '100vh' }}>
                  <Streets users={this.state.users} />
                  </div>
            )
          }}/>
          <Route path="/streetnight" render={props => {
            return(
              <div style={{ width: '100vw', height: '100vh' }}>
                  <StreetNight users={this.state.users} />
                  </div>
            )
          }}/>
          <Route path="/natgeo" render={props => {
            return(
              <div style={{ width: '100vw', height: '100vh' }}>
                  <NatGeo users={this.state.users} />
                  </div>
            )
          }}/>
          <Route path="/hybrid" render={props => {
            return(
              <div style={{ width: '100vw', height: '100vh' }}>
                  <Hybrid users={this.state.users} />
                  </div>
            )
          }}/>
          <Route path="/stories" render={props => {
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


export default withRouter(ApplicationViews)