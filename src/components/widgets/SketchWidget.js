import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader'
import "./SketchWidget.css"

const SketchWidget = (props) => {

  const saveMapGraphics = (evt) => {
    console.log(evt)
  }
  const elementRef = useRef();

  const handleClick = (e) => {
    if (elementRef.current.contains(e.target)) {
      console.log(e.mapPoint)
      return;
    }
  }
  useEffect(() => {;
    loadModules([
      "esri/widgets/Sketch",
      "esri/layers/GraphicsLayer",
      "esri/views/MapView",
      "esri/Map",
      "esri/widgets/Locate",
      "esri/Graphic",
      "esri/widgets/BasemapGallery"

    ])
      .then(([Sketch, GraphicsLayer, MapView, Map, Locate, Graphic, BasemapGallery ]) => {
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

        let locateWidget = new Locate({
          view: view,   // Attaches the Locate button to the view
          graphic: new Graphic({
            symbol: { type: "simple-marker" }  // overwrites the default symbol used for the
            // graphic placed at the location of the user when found
          })
        });
        view.ui.add(locateWidget, "top-left");
        // let basemapGallery = new BasemapGallery({
        //   view: view
        // });
        // view.ui.add(basemapGallery, {
        //   position: "bottom-right"
        // });
        view.on("click", function(event){
          console.log(event.mapPoint.latitude, event.mapPoint.longitude, layer)
        })
        document.addEventListener("click", handleClick)
      })
      return () => {
        document.removeEventListener("click", handleClick);
      };

  }, []);
  return (
    <div>
      <div id="viewDiv" ref={elementRef}></div>

         <button id="save-graphics" >
                Save Map
              </button>
      </div>
  )
};

export default SketchWidget;











