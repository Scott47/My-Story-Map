import React, { useState, useEffect, useRef } from "react";
import { loadModules } from "esri-loader";
// import EditStory from './EditStory'

const MapGraphic = props => {
  console.log(props);

  const elementRef = useRef();
  const [graphic, setGraphic] = useState(null);
  useEffect(() => {
    loadModules([
      "esri/Graphic",
      "esri/views/MapView",
      "esri/layers/GraphicsLayer",
      "esri/Map"
    ])
      .then(([Graphic, MapView, GraphicsLayer, Map]) => {
        let layer = new GraphicsLayer();
        let map = new Map({
          basemap: props.basemap,
          layers: [layer]
        });

        let view = new MapView({
          map: map,
          container: "viewDiv",
          center: [-86.76796, 36.174465],
          zoom: 14,
          ui: {
            components: ["attribution", "zoom", "compass", "locate"] // empty the UI, except for attribution
          }
        });

        const simpleMarkerSymbol = {
          type: "simple-marker",
          color: [226, 119, 40], // orange
          outline: {
            color: [255, 255, 255], // white
            width: 1
          }
        };

        const renderPoint = pointObject => {
          console.log(pointObject)
          ///start function definition like renderPoint - takes in an object that is a pointobj, it will wrap the below up to the next comment
          const point = {
            type: "point",
            longitude: pointObject.geometry.longitude,
            latitude: pointObject.geometry.latitude
          };

          const graphic = new Graphic({
            geometry: point,
            symbol: simpleMarkerSymbol
          });

          setGraphic(graphic);
          view.graphics.add(graphic);
        };

        props.points.forEach(pointObject => {

          renderPoint(pointObject);
        }); ///end function wrapping -- this is the set of shit you need to call again and again in the loop of points
      })
      .catch(err => console.error(err));

    // return function cleanup() {
    //     // view.graphics.remove(graphic);
    // };
  }, []);
  return <div id="viewDiv" ref={elementRef.current} />;
};

export default MapGraphic;
