import React from "react"
import { Sketch, Map, GraphicsLayer, MapView } from "@esri/react-arcgis"


// "esri/widgets/Sketch",
//         "esri/Map",
//         "esri/layers/GraphicsLayer",
//         "esri/views/MapView"

export default class Sketch extends React.Component {

    state = {
        sketch: new Sketch({
            layer: layer,
            view: view
          })

    }
    layer = new GraphicsLayer();

    map = new Map({
        basemap: "streets",
        layers: [layer]
      });

    view = new MapView({
        container: "viewDiv",
        map: map,
        zoom: 5,
        center: [90, 45]
      });

    sketch =

      view.ui.add(sketch, "top-right");

}

// const sketch = new Sketch({
//     view,
//     layer: graphicsLayer
//   });





