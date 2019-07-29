import React, { Component } from 'react';
import Welcome from "./Components/welcome/Welcome"
import ApplicationViews from './ApplicationViews';



class Map extends Component {
render() {
  return  (
    <React.Fragment>
      <Welcome />
      <ApplicationViews />
    </React.Fragment>
  );
}
}
export default Map
