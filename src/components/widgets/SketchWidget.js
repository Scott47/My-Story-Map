import React, { useState, useEffect, useRef } from 'react';
//import SketchWidgetViewModel from '../../../node_modules/arcgis-js-api/widgets/Sketch'

// import SketchWidgetViewModel from 'esri/widgets/Sketch/SketchViewModel'

import { loadModules } from 'esri-loader'


const SketchWidget = (props) => {

  const [sketch, setSketch] = useState();
  const elementRef = useRef();
  useEffect(() => {
    // console.log(props.view);
    loadModules([
      "esri/widgets/Sketch",
      "esri/layers/GraphicsLayer",
      "esri/views/MapView"
    ])
      .then(([Sketch, GraphicsLayer]) => {
        // console.log(SketchViewModel);

        let node = document.createElement("div")

        let layer = new GraphicsLayer();
        let sketch = new Sketch({
          view: props.view,
          layer: layer
        });
        props.view.ui.add(sketch, "top-left")

        console.log(node)

        // initialize(elementRef.current)

        // console.log(elementRef.current, "elementRef current")
        // setSketch(newSketch);

        // console.log("sketch and new sketch", sketch, newSketch)
        // console.log("propsview container", props.view.container);

      })
  }, []);
  return (
      <div id="viewDiv" ref={elementRef}>Sketch</div>
  )
};

export default SketchWidget;









// import React, { useEffect, useRef } from "react";
// import { loadModules } from "@esri/react-arcgis";






