import React, { Component } from 'react';
import ApplicationViews from './components/ApplicationViews';
import NavBar from "./components/nav/NavBar"
import "./Map.css"


class Map extends Component {



render () {


  return  (
    <React.Fragment>
      <NavBar />
      <ApplicationViews />
    </React.Fragment>
  );
}
}
export default Map

