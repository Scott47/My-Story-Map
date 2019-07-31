import React, { Component } from 'react';
import { loadModules } from 'esri-loader';

// first, we use Dojo's loader to require the map class

export default class EsriMap extends Component {
state = {}
componentDidMount() {
    loadModules(['esri/views/MapView', 'esri/WebMap'])
    .then(([MapView, WebMap]) => {
      // then we load a web map from an id
      var webmap = new WebMap({
        portalItem: { // autocasts as new PortalItem()
          id: 'f2e9b762544945f390ca4ac3671cfa72'
        }
      });
      // and we show that map in a container w/ id #viewDiv
      var view = new MapView({
        map: webmap,
        container: 'viewDiv'
      });
      this.setState({
          view: view
      })
    })
    .catch(err => {
      // handle any errors
      console.error(err);
    });
}

render() {
console.log(this.state.view)
    return  (
        <div className="viewDiv">
        </div>
      );
  }
}