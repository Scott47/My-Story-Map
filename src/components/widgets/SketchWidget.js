import React, { useState, useEffect, useRef } from "react";
import { loadModules } from "esri-loader";
import "./SketchWidget.css";
import { Button } from "reactstrap"

const SketchWidget = props => {

  const [layer, setLayer] = useState(props.layer);

  const elementRef = useRef();

  let view;
  useEffect(() => {
    console.log(layer)
    setLayer(props.layer)
    loadModules([
      "esri/widgets/Sketch",
      "esri/layers/GraphicsLayer",
      "esri/views/MapView",
      "esri/Map",
      "esri/widgets/Locate",
      "esri/Graphic",
      "esri/widgets/BasemapGallery",
      "esri/widgets/Search"
    ]).then(
      ([
        Sketch,
        GraphicsLayer,
        MapView,
        Map,
        Locate,
        Graphic,
        BasemapGallery,
        Search
      ]) => {
       let layer = new GraphicsLayer();

        setLayer(layer);

        let map = new Map({
          basemap: props.basemap,
          layers: [layer]
        });

        view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-86.76796, 36.174465],
          zoom: 12,
          ui: {
            components: ["attribution", "zoom", "compass", "locate"] // empty the UI, except for attribution
          }
        });

        let sketch = new Sketch({
          view: view,
          layer: layer
        });
        view.ui.add(sketch, "top-right");

        let locateWidget = new Locate({
          view: view, // Attaches the Locate button to the view
          graphic: new Graphic({
            symbol: { type: "simple-marker" } // overwrites the default symbol used for the
            // graphic placed at the location of the user when found
          })
        });
        view.ui.add(locateWidget, "top-left");
        let basemapGallery = new BasemapGallery({
          view: view
        });
        view.ui.add(basemapGallery, {
          position: "bottom-right"
        });

        let searchWidget = new Search({
          view: view
        });

        // Add the search widget to the top right corner of the view
        view.ui.add(searchWidget, {
          position: "top-right"
        });

        // document.addEventListener("click", handleClick)
        view.on("click", function(event) {
          console.log(event.mapPoint.latitude, event.mapPoint.longitude, layer);
        });
      }
    );
   
  }, []);
  return (
    <div>
      <div id="viewDiv" ref={elementRef} />
      <Button
      className="logo"
        id="save-graphics"
        onClick={() => props.handleClick(layer.graphics.items)}
      >
        Save Map
      </Button>
    </div>
  );
};

// layer.graphics.items

export default SketchWidget;
