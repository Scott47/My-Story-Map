import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader'
import "./SketchWidget.css"

const SketchWidget = (props) => {



  const elementRef = useRef();
  useEffect(() => {;
    loadModules([
      "esri/widgets/Sketch",
      "esri/layers/GraphicsLayer",
      "esri/views/MapView",
      "esri/Map",
      "esri/widgets/Locate",
      "esri/Graphic"

    ])
      .then(([Sketch, GraphicsLayer, MapView, Map, Locate, Graphic ]) => {
        // console.log(Sketch);
        // let map = new MapView
        let layer = new GraphicsLayer();
        let map = new Map({
          basemap: props.basemap,
          layers: [layer]
        });

        let view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-86.76796, 36.174465],
          zoom: 12,
          ui: {
            components: ["attribution", "zoom", "compass", "locate"] // empty the UI, except for attribution
          }
        });
        let node = document.createElement("div")
        let sketch = new Sketch({
          view: view,
          layer: layer,

        });
        view.ui.add(sketch, "top-right")

        var locateWidget = new Locate({
          view: view,   // Attaches the Locate button to the view
          graphic: new Graphic({
            symbol: { type: "simple-marker" }  // overwrites the default symbol used for the
            // graphic placed at the location of the user when found
          })
        });
        view.ui.add(locateWidget, "top-left");


        console.log(node)
      })
  }, []);
  return (
      <div id="viewDiv" ref={elementRef}></div>
  )
};

export default SketchWidget;











