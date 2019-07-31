import { Route, withRouter } from 'react-router-dom'
import React, { Component } from "react"
import Welcome from "./welcome/Welcome"
import Login from "./welcome/Login"
import Register from "./welcome/Register"
import UserHandler from "./apiManager/UserHandler";
import { WebMap, Scene } from '@esri/react-arcgis';
import Satellite from "./basemaps/Satellite"
import Topo from "./basemaps/Topo"
import Streets from "./basemaps/StreetVector"
import StreetNight from "./basemaps/StreetNight"


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
  }

  addUser = user =>
    UserHandler.post(user)
      .then(() => UserHandler.getAll())
      .then(users =>
        this.setState({
          users: users
        })
      );

  isAuthenticated = () => sessionStorage.getItem("userId") !== null;

  render () {
      return (
        <React.Fragment >
       <Route
          exact path="/" render={props => {
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



          {/* <Route path="/base"
        style={{ width: '100vw', height: '100vh' }}
        mapProperties={{ basemap: 'satellite' }}
        viewProperties={{
            center: [-122.4443, 47.2529],
            zoom: 6
        }}
    /> */}
      </React.Fragment>
      )
  }

}


export default withRouter(ApplicationViews)