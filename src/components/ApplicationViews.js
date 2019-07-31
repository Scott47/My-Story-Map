import { Route, withRouter } from 'react-router-dom'
import React, { Component } from "react"
import Welcome from "./welcome/Welcome"
import Login from "./welcome/Login"
import Register from "./welcome/Register"
import UserHandler from "./apiManager/UserHandler";
import EsriMap from "./map/EsriMap";




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
                <Route
          path="/sterco" render={props => {
            return (
              <EsriMap users={this.state.users}
                {...props}
              />
            );
          }}
        />
      </React.Fragment>
      )
  }

}

export default withRouter(ApplicationViews)