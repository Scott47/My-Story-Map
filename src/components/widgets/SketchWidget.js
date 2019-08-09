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
      "esri/Map"
    ])
      .then(([Sketch, GraphicsLayer, MapView, Map ]) => {
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

        console.log(node)
      })
  }, []);
  return (
      <div id="viewDiv" ref={elementRef}></div>
  )
};

export default SketchWidget;








