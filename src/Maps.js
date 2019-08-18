import React, { Component } from 'react';
import ApplicationViews from './components/ApplicationViews';
import NavBar from "./components/nav/NavBar"
import "./Map.css"


class Map extends Component {



render () {


  return  (
    <div className="not-root">
      <NavBar />
      <ApplicationViews />
    </div>
  );
}
}
export default Map

