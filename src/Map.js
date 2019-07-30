import React, { Component } from 'react';
import Welcome from "./components/welcome/Welcome"
import ApplicationViews from './components/ApplicationViews';
import NavBar from "./nav/NavBar"


class Map extends Component {
render() {
  return  (
    <React.Fragment>
      <NavBar />
      <Welcome />
      <ApplicationViews />
    </React.Fragment>
  );
}
}
export default Map
